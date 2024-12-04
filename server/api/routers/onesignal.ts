import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { client } from '@/config/onesignal'
import { env } from '@/env'

import { createTRPCRouter, publicProcedure } from '../trpc'

export const onesignalRouter = createTRPCRouter({
  sendContact: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string().email(),
        type: z.string(),
        message: z.string(),
      }),
    )
    .mutation(
      async ({ input: { firstName, lastName, email, type, message } }) => {
        try {
          const response = await client.createNotification({
            app_id: env.NEXT_PUBLIC_ONESIGNAL_APP_ID,
            include_email_tokens: [email],
            email_from_address: 'info@treesury.com',
            email_from_name: 'Treesury',
            email_subject: `Treesury Hazelnut Contact Form - ${firstName} ${lastName}`,
            include_unsubscribed: true,
            email_body: `<table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" class="wrapper" style="border: 3px solid #333;font-family: sans-serif;padding-bottom: 40px;" width="640">
             <tbody>
                 <tr>
                     <td align="center" height="10" style="font-size:10px; line-height:10px;text-align: center;padding: 15px;background: #f7f7f7;"><img alt="" class="img-fluid" src="https://demo.treesury.com/assets/img/logo.png" style="width: 200px; height: 70px;" /></td>
                 </tr>
                 <tr>
                     <td align="center" style="background: #f7f7f7;" valign="top">
                         <table border="0" cellpadding="0" cellspacing="0" class="container" style="margin-bottom: 10px;" width="600">
                             <tbody>
                                 <tr>
                                     <td align="center" valign="top">
                                     <h2>Treesury - Contact Form</h2>
                                     </td>
                                 </tr>
                             </tbody>
                         </table>
                     </td>
                 </tr>
                 <tr>
                     <td align="center" valign="top">
                         <table border="0" cellpadding="0" cellspacing="0" class="container" style="margin-top: 30px;" width="400">
                             <tbody>
                                 <tr>
                                     <td style="border-bottom: 1px solid #ccc;padding: 10px;width: 30%" valign="top">Full name:</td>
                                     <td align="center" style="border-bottom: 1px solid #ccc;padding: 10px;width: 10px" valign="top">&nbsp;</td>
                                     <td align="left" style="border-bottom: 1px solid #ccc;padding: 10px;width: 70%" valign="top">${firstName} ${lastName}</td>
                                 </tr>
                                 <tr>
                                     <td style="border-bottom: 1px solid #ccc;padding: 10px;width: 30%" valign="top">Email:</td>
                                     <td align="center" style="border-bottom: 1px solid #ccc;padding: 10px;width: 10px" valign="top">&nbsp;</td>
                                     <td align="left" style="border-bottom: 1px solid #ccc;padding: 10px;width: 70%" valign="top">${email}</td>
                                 </tr>
                                 <tr>
                                     <td style="border-bottom: 1px solid #ccc;padding: 10px;width: 30%" valign="top">I am:</td>
                                     <td align="center" style="border-bottom: 1px solid #ccc;padding: 10px;width: 10px" valign="top">&nbsp;</td>
                                     <td align="left" style="border-bottom: 1px solid #ccc;padding: 10px;width: 70%" valign="top">${type}</td>
                                 </tr>
                                 <tr>
                                     <td style="border-bottom: 1px solid #ccc;padding: 10px;width: 30%" valign="top">Message:</td>
                                     <td align="center" style="border-bottom: 1px solid #ccc;padding: 10px;width: 10px" valign="top">&nbsp;</td>
                                     <td align="left" style="border-bottom: 1px solid #ccc;padding: 10px;width: 70%" valign="top">&nbsp;</td>
                                 </tr>
                                 <tr>
                                     <td colspan="3" style="border-bottom: 1px solid #ccc;padding: 10px;width: 30%" valign="top">${message}</td>
                                 </tr>
                             </tbody>
                         </table>
                     </td>
                 </tr>
                 <tr>
                     <td height="10" style="font-size:10px; line-height:10px;">&nbsp;</td>
                 </tr>
             </tbody>
         </table>`,
          })
          return response
        } catch (error) {
          throw new TRPCError({
            code: 'NOT_FOUND',
          })
        }
      },
    ),
})
