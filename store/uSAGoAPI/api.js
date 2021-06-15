import axios from "axios"
const uSAGoAPI = axios.create({
  baseURL: "https://usa-2-go-27981-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_bookingtransaction_list(payload) {
  return uSAGoAPI.get(`/api/v1/bookingtransaction/`)
}
function api_v1_bookingtransaction_create(payload) {
  return uSAGoAPI.post(`/api/v1/bookingtransaction/`, payload.data)
}
function api_v1_bookingtransaction_read(payload) {
  return uSAGoAPI.get(`/api/v1/bookingtransaction/${payload.id}/`)
}
function api_v1_bookingtransaction_update(payload) {
  return uSAGoAPI.put(`/api/v1/bookingtransaction/${payload.id}/`, payload.data)
}
function api_v1_bookingtransaction_partial_update(payload) {
  return uSAGoAPI.patch(
    `/api/v1/bookingtransaction/${payload.id}/`,
    payload.data
  )
}
function api_v1_bookingtransaction_delete(payload) {
  return uSAGoAPI.delete(`/api/v1/bookingtransaction/${payload.id}/`)
}
function api_v1_customtext_list(payload) {
  return uSAGoAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_create(payload) {
  return uSAGoAPI.post(`/api/v1/customtext/`, payload.data)
}
function api_v1_customtext_read(payload) {
  return uSAGoAPI.get(`/api/v1/customtext/${payload.id}/`)
}
function api_v1_customtext_update(payload) {
  return uSAGoAPI.put(`/api/v1/customtext/${payload.id}/`, payload.data)
}
function api_v1_customtext_partial_update(payload) {
  return uSAGoAPI.patch(`/api/v1/customtext/${payload.id}/`, payload.data)
}
function api_v1_customtext_delete(payload) {
  return uSAGoAPI.delete(`/api/v1/customtext/${payload.id}/`)
}
function api_v1_document_list(payload) {
  return uSAGoAPI.get(`/api/v1/document/`)
}
function api_v1_document_create(payload) {
  return uSAGoAPI.post(`/api/v1/document/`, payload.data)
}
function api_v1_document_read(payload) {
  return uSAGoAPI.get(`/api/v1/document/${payload.id}/`)
}
function api_v1_document_update(payload) {
  return uSAGoAPI.put(`/api/v1/document/${payload.id}/`, payload.data)
}
function api_v1_document_partial_update(payload) {
  return uSAGoAPI.patch(`/api/v1/document/${payload.id}/`, payload.data)
}
function api_v1_document_delete(payload) {
  return uSAGoAPI.delete(`/api/v1/document/${payload.id}/`)
}
function api_v1_driverprofile_list(payload) {
  return uSAGoAPI.get(`/api/v1/driverprofile/`)
}
function api_v1_driverprofile_create(payload) {
  return uSAGoAPI.post(`/api/v1/driverprofile/`, payload.data)
}
function api_v1_driverprofile_read(payload) {
  return uSAGoAPI.get(`/api/v1/driverprofile/${payload.id}/`)
}
function api_v1_driverprofile_update(payload) {
  return uSAGoAPI.put(`/api/v1/driverprofile/${payload.id}/`, payload.data)
}
function api_v1_driverprofile_partial_update(payload) {
  return uSAGoAPI.patch(`/api/v1/driverprofile/${payload.id}/`, payload.data)
}
function api_v1_driverprofile_delete(payload) {
  return uSAGoAPI.delete(`/api/v1/driverprofile/${payload.id}/`)
}
function api_v1_driverwallet_list(payload) {
  return uSAGoAPI.get(`/api/v1/driverwallet/`)
}
function api_v1_driverwallet_create(payload) {
  return uSAGoAPI.post(`/api/v1/driverwallet/`, payload.data)
}
function api_v1_driverwallet_read(payload) {
  return uSAGoAPI.get(`/api/v1/driverwallet/${payload.id}/`)
}
function api_v1_driverwallet_update(payload) {
  return uSAGoAPI.put(`/api/v1/driverwallet/${payload.id}/`, payload.data)
}
function api_v1_driverwallet_partial_update(payload) {
  return uSAGoAPI.patch(`/api/v1/driverwallet/${payload.id}/`, payload.data)
}
function api_v1_driverwallet_delete(payload) {
  return uSAGoAPI.delete(`/api/v1/driverwallet/${payload.id}/`)
}
function api_v1_homepage_list(payload) {
  return uSAGoAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_create(payload) {
  return uSAGoAPI.post(`/api/v1/homepage/`, payload.data)
}
function api_v1_homepage_read(payload) {
  return uSAGoAPI.get(`/api/v1/homepage/${payload.id}/`)
}
function api_v1_homepage_update(payload) {
  return uSAGoAPI.put(`/api/v1/homepage/${payload.id}/`, payload.data)
}
function api_v1_homepage_partial_update(payload) {
  return uSAGoAPI.patch(`/api/v1/homepage/${payload.id}/`, payload.data)
}
function api_v1_homepage_delete(payload) {
  return uSAGoAPI.delete(`/api/v1/homepage/${payload.id}/`)
}
function api_v1_invitecode_list(payload) {
  return uSAGoAPI.get(`/api/v1/invitecode/`)
}
function api_v1_invitecode_create(payload) {
  return uSAGoAPI.post(`/api/v1/invitecode/`, payload.data)
}
function api_v1_invitecode_read(payload) {
  return uSAGoAPI.get(`/api/v1/invitecode/${payload.id}/`)
}
function api_v1_invitecode_update(payload) {
  return uSAGoAPI.put(`/api/v1/invitecode/${payload.id}/`, payload.data)
}
function api_v1_invitecode_partial_update(payload) {
  return uSAGoAPI.patch(`/api/v1/invitecode/${payload.id}/`, payload.data)
}
function api_v1_invitecode_delete(payload) {
  return uSAGoAPI.delete(`/api/v1/invitecode/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return uSAGoAPI.post(`/api/v1/login/`)
}
function api_v1_maplocation_list(payload) {
  return uSAGoAPI.get(`/api/v1/maplocation/`)
}
function api_v1_maplocation_create(payload) {
  return uSAGoAPI.post(`/api/v1/maplocation/`, payload.data)
}
function api_v1_maplocation_read(payload) {
  return uSAGoAPI.get(`/api/v1/maplocation/${payload.id}/`)
}
function api_v1_maplocation_update(payload) {
  return uSAGoAPI.put(`/api/v1/maplocation/${payload.id}/`, payload.data)
}
function api_v1_maplocation_partial_update(payload) {
  return uSAGoAPI.patch(`/api/v1/maplocation/${payload.id}/`, payload.data)
}
function api_v1_maplocation_delete(payload) {
  return uSAGoAPI.delete(`/api/v1/maplocation/${payload.id}/`)
}
function api_v1_message_list(payload) {
  return uSAGoAPI.get(`/api/v1/message/`)
}
function api_v1_message_create(payload) {
  return uSAGoAPI.post(`/api/v1/message/`, payload.data)
}
function api_v1_message_read(payload) {
  return uSAGoAPI.get(`/api/v1/message/${payload.id}/`)
}
function api_v1_message_update(payload) {
  return uSAGoAPI.put(`/api/v1/message/${payload.id}/`, payload.data)
}
function api_v1_message_partial_update(payload) {
  return uSAGoAPI.patch(`/api/v1/message/${payload.id}/`, payload.data)
}
function api_v1_message_delete(payload) {
  return uSAGoAPI.delete(`/api/v1/message/${payload.id}/`)
}
function api_v1_notification_list(payload) {
  return uSAGoAPI.get(`/api/v1/notification/`)
}
function api_v1_notification_create(payload) {
  return uSAGoAPI.post(`/api/v1/notification/`, payload.data)
}
function api_v1_notification_read(payload) {
  return uSAGoAPI.get(`/api/v1/notification/${payload.id}/`)
}
function api_v1_notification_update(payload) {
  return uSAGoAPI.put(`/api/v1/notification/${payload.id}/`, payload.data)
}
function api_v1_notification_partial_update(payload) {
  return uSAGoAPI.patch(`/api/v1/notification/${payload.id}/`, payload.data)
}
function api_v1_notification_delete(payload) {
  return uSAGoAPI.delete(`/api/v1/notification/${payload.id}/`)
}
function api_v1_paymentmethod_list(payload) {
  return uSAGoAPI.get(`/api/v1/paymentmethod/`)
}
function api_v1_paymentmethod_create(payload) {
  return uSAGoAPI.post(`/api/v1/paymentmethod/`, payload.data)
}
function api_v1_paymentmethod_read(payload) {
  return uSAGoAPI.get(`/api/v1/paymentmethod/${payload.id}/`)
}
function api_v1_paymentmethod_update(payload) {
  return uSAGoAPI.put(`/api/v1/paymentmethod/${payload.id}/`, payload.data)
}
function api_v1_paymentmethod_partial_update(payload) {
  return uSAGoAPI.patch(`/api/v1/paymentmethod/${payload.id}/`, payload.data)
}
function api_v1_paymentmethod_delete(payload) {
  return uSAGoAPI.delete(`/api/v1/paymentmethod/${payload.id}/`)
}
function api_v1_profilelocation_list(payload) {
  return uSAGoAPI.get(`/api/v1/profilelocation/`)
}
function api_v1_profilelocation_create(payload) {
  return uSAGoAPI.post(`/api/v1/profilelocation/`, payload.data)
}
function api_v1_profilelocation_read(payload) {
  return uSAGoAPI.get(`/api/v1/profilelocation/${payload.id}/`)
}
function api_v1_profilelocation_update(payload) {
  return uSAGoAPI.put(`/api/v1/profilelocation/${payload.id}/`, payload.data)
}
function api_v1_profilelocation_partial_update(payload) {
  return uSAGoAPI.patch(`/api/v1/profilelocation/${payload.id}/`, payload.data)
}
function api_v1_profilelocation_delete(payload) {
  return uSAGoAPI.delete(`/api/v1/profilelocation/${payload.id}/`)
}
function api_v1_rating_list(payload) {
  return uSAGoAPI.get(`/api/v1/rating/`)
}
function api_v1_rating_create(payload) {
  return uSAGoAPI.post(`/api/v1/rating/`, payload.data)
}
function api_v1_rating_read(payload) {
  return uSAGoAPI.get(`/api/v1/rating/${payload.id}/`)
}
function api_v1_rating_update(payload) {
  return uSAGoAPI.put(`/api/v1/rating/${payload.id}/`, payload.data)
}
function api_v1_rating_partial_update(payload) {
  return uSAGoAPI.patch(`/api/v1/rating/${payload.id}/`, payload.data)
}
function api_v1_rating_delete(payload) {
  return uSAGoAPI.delete(`/api/v1/rating/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return uSAGoAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_userprofile_list(payload) {
  return uSAGoAPI.get(`/api/v1/userprofile/`)
}
function api_v1_userprofile_create(payload) {
  return uSAGoAPI.post(`/api/v1/userprofile/`, payload.data)
}
function api_v1_userprofile_read(payload) {
  return uSAGoAPI.get(`/api/v1/userprofile/${payload.id}/`)
}
function api_v1_userprofile_update(payload) {
  return uSAGoAPI.put(`/api/v1/userprofile/${payload.id}/`, payload.data)
}
function api_v1_userprofile_partial_update(payload) {
  return uSAGoAPI.patch(`/api/v1/userprofile/${payload.id}/`, payload.data)
}
function api_v1_userprofile_delete(payload) {
  return uSAGoAPI.delete(`/api/v1/userprofile/${payload.id}/`)
}
function api_v1_userwallet_list(payload) {
  return uSAGoAPI.get(`/api/v1/userwallet/`)
}
function api_v1_userwallet_create(payload) {
  return uSAGoAPI.post(`/api/v1/userwallet/`, payload.data)
}
function api_v1_userwallet_read(payload) {
  return uSAGoAPI.get(`/api/v1/userwallet/${payload.id}/`)
}
function api_v1_userwallet_update(payload) {
  return uSAGoAPI.put(`/api/v1/userwallet/${payload.id}/`, payload.data)
}
function api_v1_userwallet_partial_update(payload) {
  return uSAGoAPI.patch(`/api/v1/userwallet/${payload.id}/`, payload.data)
}
function api_v1_userwallet_delete(payload) {
  return uSAGoAPI.delete(`/api/v1/userwallet/${payload.id}/`)
}
function api_v1_vehicle_list(payload) {
  return uSAGoAPI.get(`/api/v1/vehicle/`)
}
function api_v1_vehicle_create(payload) {
  return uSAGoAPI.post(`/api/v1/vehicle/`, payload.data)
}
function api_v1_vehicle_read(payload) {
  return uSAGoAPI.get(`/api/v1/vehicle/${payload.id}/`)
}
function api_v1_vehicle_update(payload) {
  return uSAGoAPI.put(`/api/v1/vehicle/${payload.id}/`, payload.data)
}
function api_v1_vehicle_partial_update(payload) {
  return uSAGoAPI.patch(`/api/v1/vehicle/${payload.id}/`, payload.data)
}
function api_v1_vehicle_delete(payload) {
  return uSAGoAPI.delete(`/api/v1/vehicle/${payload.id}/`)
}
function api_v1_vehiclelocation_list(payload) {
  return uSAGoAPI.get(`/api/v1/vehiclelocation/`)
}
function api_v1_vehiclelocation_create(payload) {
  return uSAGoAPI.post(`/api/v1/vehiclelocation/`, payload.data)
}
function api_v1_vehiclelocation_read(payload) {
  return uSAGoAPI.get(`/api/v1/vehiclelocation/${payload.id}/`)
}
function api_v1_vehiclelocation_update(payload) {
  return uSAGoAPI.put(`/api/v1/vehiclelocation/${payload.id}/`, payload.data)
}
function api_v1_vehiclelocation_partial_update(payload) {
  return uSAGoAPI.patch(`/api/v1/vehiclelocation/${payload.id}/`, payload.data)
}
function api_v1_vehiclelocation_delete(payload) {
  return uSAGoAPI.delete(`/api/v1/vehiclelocation/${payload.id}/`)
}
function api_v1_vehicletype_list(payload) {
  return uSAGoAPI.get(`/api/v1/vehicletype/`)
}
function api_v1_vehicletype_create(payload) {
  return uSAGoAPI.post(`/api/v1/vehicletype/`, payload.data)
}
function api_v1_vehicletype_read(payload) {
  return uSAGoAPI.get(`/api/v1/vehicletype/${payload.id}/`)
}
function api_v1_vehicletype_update(payload) {
  return uSAGoAPI.put(`/api/v1/vehicletype/${payload.id}/`, payload.data)
}
function api_v1_vehicletype_partial_update(payload) {
  return uSAGoAPI.patch(`/api/v1/vehicletype/${payload.id}/`, payload.data)
}
function api_v1_vehicletype_delete(payload) {
  return uSAGoAPI.delete(`/api/v1/vehicletype/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return uSAGoAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_list(payload) {
  return uSAGoAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return uSAGoAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return uSAGoAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return uSAGoAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return uSAGoAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return uSAGoAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return uSAGoAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function rest_auth_user_read(payload) {
  return uSAGoAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return uSAGoAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return uSAGoAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_v1_bookingtransaction_list,
  api_v1_bookingtransaction_create,
  api_v1_bookingtransaction_read,
  api_v1_bookingtransaction_update,
  api_v1_bookingtransaction_partial_update,
  api_v1_bookingtransaction_delete,
  api_v1_customtext_list,
  api_v1_customtext_create,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_customtext_delete,
  api_v1_document_list,
  api_v1_document_create,
  api_v1_document_read,
  api_v1_document_update,
  api_v1_document_partial_update,
  api_v1_document_delete,
  api_v1_driverprofile_list,
  api_v1_driverprofile_create,
  api_v1_driverprofile_read,
  api_v1_driverprofile_update,
  api_v1_driverprofile_partial_update,
  api_v1_driverprofile_delete,
  api_v1_driverwallet_list,
  api_v1_driverwallet_create,
  api_v1_driverwallet_read,
  api_v1_driverwallet_update,
  api_v1_driverwallet_partial_update,
  api_v1_driverwallet_delete,
  api_v1_homepage_list,
  api_v1_homepage_create,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_homepage_delete,
  api_v1_invitecode_list,
  api_v1_invitecode_create,
  api_v1_invitecode_read,
  api_v1_invitecode_update,
  api_v1_invitecode_partial_update,
  api_v1_invitecode_delete,
  api_v1_login_create,
  api_v1_maplocation_list,
  api_v1_maplocation_create,
  api_v1_maplocation_read,
  api_v1_maplocation_update,
  api_v1_maplocation_partial_update,
  api_v1_maplocation_delete,
  api_v1_message_list,
  api_v1_message_create,
  api_v1_message_read,
  api_v1_message_update,
  api_v1_message_partial_update,
  api_v1_message_delete,
  api_v1_notification_list,
  api_v1_notification_create,
  api_v1_notification_read,
  api_v1_notification_update,
  api_v1_notification_partial_update,
  api_v1_notification_delete,
  api_v1_paymentmethod_list,
  api_v1_paymentmethod_create,
  api_v1_paymentmethod_read,
  api_v1_paymentmethod_update,
  api_v1_paymentmethod_partial_update,
  api_v1_paymentmethod_delete,
  api_v1_profilelocation_list,
  api_v1_profilelocation_create,
  api_v1_profilelocation_read,
  api_v1_profilelocation_update,
  api_v1_profilelocation_partial_update,
  api_v1_profilelocation_delete,
  api_v1_rating_list,
  api_v1_rating_create,
  api_v1_rating_read,
  api_v1_rating_update,
  api_v1_rating_partial_update,
  api_v1_rating_delete,
  api_v1_signup_create,
  api_v1_userprofile_list,
  api_v1_userprofile_create,
  api_v1_userprofile_read,
  api_v1_userprofile_update,
  api_v1_userprofile_partial_update,
  api_v1_userprofile_delete,
  api_v1_userwallet_list,
  api_v1_userwallet_create,
  api_v1_userwallet_read,
  api_v1_userwallet_update,
  api_v1_userwallet_partial_update,
  api_v1_userwallet_delete,
  api_v1_vehicle_list,
  api_v1_vehicle_create,
  api_v1_vehicle_read,
  api_v1_vehicle_update,
  api_v1_vehicle_partial_update,
  api_v1_vehicle_delete,
  api_v1_vehiclelocation_list,
  api_v1_vehiclelocation_create,
  api_v1_vehiclelocation_read,
  api_v1_vehiclelocation_update,
  api_v1_vehiclelocation_partial_update,
  api_v1_vehiclelocation_delete,
  api_v1_vehicletype_list,
  api_v1_vehicletype_create,
  api_v1_vehicletype_read,
  api_v1_vehicletype_update,
  api_v1_vehicletype_partial_update,
  api_v1_vehicletype_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
