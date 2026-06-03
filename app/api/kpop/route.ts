import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      nombre,
      edad,
      whatsapp,
      instagram,
      grupo,
      cancion,
      artista,
      categoria,
      integrantes,
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
      subject: "💜 Nueva inscripción K-POP DANCE",
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px; background:#0b0812; color:#ffffff;">
          
          <h2 style="color:#a855f7;">Nueva inscripción K-POP DANCE</h2>

          <hr style="border:1px solid #a855f733;" />

          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Edad:</strong> ${edad}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp}</p>
          <p><strong>Instagram / TikTok:</strong> ${instagram}</p>

          <hr style="border:1px solid #a855f733;" />

          <p><strong>Grupo:</strong> ${grupo}</p>
          <p><strong>Canción:</strong> ${cancion}</p>
          <p><strong>Artista K-POP:</strong> ${artista}</p>
          <p><strong>Categoría:</strong> ${categoria}</p>

          <hr style="border:1px solid #a855f733;" />

          <p><strong>Integrantes:</strong></p>
          <p>${integrantes}</p>

          <p><strong>Requerimientos especiales:</strong></p>
          <p>${requerimientos}</p>

          <hr style="border:1px solid #a855f733;" />

          <p style="font-size:12px; opacity:0.6;">
            Q-ASIAN FEST • K-POP DANCE REGISTRATION
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("KPOP API ERROR:", error);

    return NextResponse.json(
      { success: false, error: "Error enviando inscripción" },
      { status: 500 }
    );
  }
}