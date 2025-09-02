// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   try {
//     const { fullName, email, audienceId, company, role, teamSize, primaryStack, biggestPainPoint } = await request.json();

//     const {data
//   } = await resend.contacts.create({
//       email,
//       audienceId,
//       unsubscribed: false,
//     });
//   const {data:contactData, error:contactError} = await resend.contacts.update({
//     id: data?.id,
//     company,
//     role,
//     teamSize,
//     primaryStack,
//     biggestPainPoint,
//     firstName: fullName.split(' ')[0],
//     lastName: fullName.split(' ')[1],
//     fullName,

//   })

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ message: 'Failed to add contact', error }, { status: 500 });
//   }
// }
