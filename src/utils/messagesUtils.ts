export const messagesUtils = {
  error: {
    auth: {
      invalidToken: "token_invalid",
      userNotFound: "user_notFound",
      credentialsMismatch: "credentials_mismatch",
      nameRequired: "name_required",
      emailRequired: "email_required",
      emailInvalid: "email_invalid",
      emailRegistered: "email_registered",
      passwordRequired: "password_required",
      passwordTooShort: "password_tooShort",
      confirmPasswordRequired: "confirmPassword_required",
      confirmPasswordMismatch: "confirmPassword_mismatch",
    },
    osrm: {
      fetchError: "osrm_fetchError",
    },
    icarStop: {
      invalidId: "icarStop_invalidId",
      notFound: "icarStop_notFound",
    },
    icarRoute: {
      invalidId: "icarRoute_id_invalid",
      invalidPolyline: "icarRoute_polyline_invalid",
      notFound: "icarRoute_notFound",
    },
    user: {
      invalidPosition: "user_position_invalid",
      invalidId: "user_id_invalid",
    },
    ticket: {
      invalidStatus: "ticket_status_invalid",
      invalidId: "ticket_id_invalid",
      notFound: "ticket_notFound",
      invalidReview: "ticket_review_invalid",
    },
    schedule: {
      invalidId: "schedule_id_invalid",
      notFound: "schedule_notFound",
    },
    icar: {
      invalidId: "icar_id_invalid",
      invalidPosition: "icar_position_invalid",
      notFound: "icar_notFound",
    },
    review: {
      invalidRating: "review_invalid_rating",
    },
    unprocessableEntity: "unprocessable_entity",
    internalServerError: "internal_server_error",
  },
  success: {
    loginSuccess: "login_success",
    userCreated: "user_created_successfully",
    ticketCreated: "ticket_created_successfully",
    ticketStatusUpdated: "ticket_status_updated_successfully",
    ticketReviewUpdated: "ticket_review_updated_successfully",
  },
};
