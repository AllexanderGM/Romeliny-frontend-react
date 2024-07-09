import CryptoJS from "crypto-js";

class EncryptData {
    static algorithm = import.meta.env.VITE_ALGORITHM;
    static key = import.meta.env.VITE_KEY; // Asegúrate de que VITE_KEY esté configurado en tu entorno
    static iv = import.meta.env.VITE_IV; // Asegúrate de que VITE_IV esté configurado en tu entorno

    // Encriptar datos
    static async encrypt(data) {
        try {
            const encrypted = CryptoJS.AES.encrypt(data, EncryptData.key, {
                iv: CryptoJS.enc.Hex.parse(EncryptData.iv),
            }).toString();
            return encrypted;
        } catch (error) {
            console.error("Error al encriptar:", error);
            throw error;
        }
    }

    // Desencriptar datos
    static async decrypt(encryptedData) {
        try {
            const bytes = CryptoJS.AES.decrypt(encryptedData, EncryptData.key, {
                iv: CryptoJS.enc.Hex.parse(EncryptData.iv),
            }).toString(CryptoJS.enc.Utf8);
            return bytes;
        } catch (error) {
            console.error("Error al desencriptar:", error);
            return null;
        }
    }

    // Encriptar JSON
    static async encryptJSON(data) {
        try {
            return this.encrypt(JSON.stringify(data));
        } catch (error) {
            console.error("Error al encriptar JSON:", error);
            throw error;
        }
    }

    // Desencriptar JSON
    static async decryptJSON(data) {
        try {
            return JSON.parse(await this.decrypt(data));
        } catch (error) {
            console.error("Error al desencriptar JSON:", error);
            return error;
        }
    }
}

export default EncryptData;
