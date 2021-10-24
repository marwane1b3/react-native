export const AxiosConfigs = {
  BASE_URL: 'http://10.0.2.2/backend_staffone',

  TIMEOUT: '',
};
export const MICROSERVICE_BASE_URL = {
  INSCRIPTION: `${AxiosConfigs.BASE_URL}/api_inscription.php`,
  LOGIN: `${AxiosConfigs.BASE_URL}/api_connexion.php`,
  MODIFICATION: `${AxiosConfigs.BASE_URL}/api_update_profil.php`,
};
