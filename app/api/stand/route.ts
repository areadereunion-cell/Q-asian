import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      nombre,
      stand,
      email,
      whatsapp,
      tipo,
      instagram,
      descripcion,
      requerimientos,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Q-ASIAN FEST" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: "🛍️ Nueva inscripción de Stand",
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px; background:#0a0a0a; color:#ffffff;">
          
          <h2 style="color:#ff3b30;">Nueva inscripción de Stand</h2>

          <hr style="border:1px solid #ff3b3033;" />

          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Nombre del Stand:</strong> ${stand}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp}</p>

          <hr style="border:1px solid #ff3b3033;" />

          <p><strong>Tipo de Stand:</strong> ${tipo}</p>
          <p><strong>Instagram / Red Social:</strong> ${instagram}</p>

          <hr style="border:1px solid #ff3b3033;" />

          <p><strong>Descripción del Stand:</strong></p>
          <p>${descripcion}</p>

          <p><strong>Productos del stand:</strong></p>
          <p>${requerimientos}</p>

          <hr style="border:1px solid #ff3b3033;" />

          <p style="font-size:12px; opacity:0.6;">
            Q-ASIAN FEST • Registro automático de stands
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("ERROR STAND API:", error);

    return NextResponse.json(
      { success: false, error: "Error al enviar correo" },
      { status: 500 }
    );
  }
}