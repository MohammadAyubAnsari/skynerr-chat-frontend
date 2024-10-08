export const HOST = import.meta.env.VITE_API_URL;

// Auth routes
export const AUTH_ROUTES = "/api/auth";
export const SIGNUP_ROUTE = `${AUTH_ROUTES}/signup`;
export const LOGIN_ROUTE = `${AUTH_ROUTES}/login`;
export const GET_USER_INFO_ROUTE = `${AUTH_ROUTES}/user-info`;
export const UPDATE_PROFILE_ROUTE = `${AUTH_ROUTES}/update-profile`;
export const ADD_PROFILE_IMAGE_ROUTE = `${AUTH_ROUTES}/add-profile-image`;
export const REMOVE_PROFILE_IMAGE_ROUTE = `${AUTH_ROUTES}/remove-profile-image`;
export const LOGOUT_ROUTE = `${AUTH_ROUTES}/logout`;

// Contact routes
export const CONTACTS_ROUTE = "/api/contacts";
export const SEARCH_CONTACTS_ROUTE = `${CONTACTS_ROUTE}/search`;
export const GET_CONTACTS_FOR_DM = `${CONTACTS_ROUTE}/get-contacts-for-dm`;

// Message routes
export const MESSAGES_ROUTE = "/api/messages";
export const GET_ALL_MESSAGES_ROUTE = `${MESSAGES_ROUTE}/get-messages`;
