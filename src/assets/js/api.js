import req from 'request';
import { resolve } from 'url';
import { BASE_HOST } from '@/utils/config.js';
// 提交审核
export function anchorVerify({
    userId,
    guardianIdFrontUrl,
    guardianIdBackUrl,
    guardianAuthorizeUrl,
    householdRegisterMainUrl,
    householdRegisterGuardianUrl,
    householdRegisterNjUrl
}) {
    return new Promise(function(resolve, reject) {
        req({
            url: `${BASE_HOST}/api/v1/monor/verify`,
            method: "POST",
            crossOrigin: true,
            data: {
                userId,
                guardianIdFrontUrl,
                guardianIdBackUrl,
                guardianAuthorizeUrl,
                householdRegisterMainUrl,
                householdRegisterGuardianUrl,
                householdRegisterNjUrl
            }
        }).then(function(res) {
            resolve(res)
        });
    })
}