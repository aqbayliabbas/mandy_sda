import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
    const stripeKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeKey) {
        console.error("STRIPE_SECRET_KEY is missing");
        return NextResponse.json(
            { error: "Internal Server Error: Missing Stripe Configuration" },
            { status: 500 }
        );
    }

    const stripe = new Stripe(stripeKey, {
        apiVersion: "2025-12-15.clover" as any, // Using 'as any' to avoid potential strict type mismatches if the version updates again, but targeting the reported version.
    });

    try {
        const body = await req.json();
        const { name, firstName, email, address, postalCode, city, country } = body;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "eur",
                        product_data: {
                            name: "Le Guide Ultime - Algérie",
                            description: "Le guide complet pour découvrir l'Algérie authentique. 8 villes, conseils et adresses.",
                            images: ["https://mandy-sda.com/og-image.jpg"], // Replace with real image URL if available
                        },
                        unit_amount: 700, // 7.00€
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${req.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.get("origin")}/?canceled=true`,
            customer_email: email, // Pre-fill email from form
            metadata: {
                customer_name: `${firstName} ${name}`,
                customer_address: `${address}, ${postalCode} ${city}, ${country}`,
            },
        });

        return NextResponse.json({ url: session.url });
    } catch (err: any) {
        console.error("Stripe Error:", err);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
