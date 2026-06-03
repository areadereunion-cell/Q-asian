import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      nombre,
      edad,
      whatsapp,
      redes,
      personaje,
      anime,
      descripcion,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Q-ASIAN FEST " <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: "🎭 Nueva inscripción cosplay",
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px; background:#0b0f14; color:#ffffff;">
          
          <h2 style="color:#22d3ee;">Nueva inscripción de Cosplay</h2>

          <hr style="border:1px solid #22d3ee33;" />

          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Edad:</strong> ${edad}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp}</p>
          <p><strong>Redes:</strong> ${redes}</p>
          <p><strong>Personaje:</strong> ${personaje}</p>
          <p><strong>Anime / Juego / Serie:</strong> ${anime}</p>

          <hr style="border:1px solid #22d3ee33;" />

          <p style="margin-top:10px;"><strong>Descripción del cosplay:</strong></p>
          <p>${descripcion}</p>

          <hr style="border:1px solid #22d3ee33;" />

          <p style="font-size:12px; opacity:0.7;">
            Q-ASIAN FEST • Registro automático de cosplay
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("ERROR COSPLAY API:", error);

    return NextResponse.json(
      { success: false, error: "Error al enviar correo" },
      { status: 500 }
    );
  }
}