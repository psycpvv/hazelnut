import * as OneSignal from '@onesignal/node-onesignal'

import { env } from '@/env'

const configuration = OneSignal.createConfiguration({
  restApiKey: env.ONESIGNAL_REST_API_KEY,
  userAuthKey: env.ONESIGNAL_USER_AUTH_KEY,
})

export const client = new OneSignal.DefaultApi(configuration)
