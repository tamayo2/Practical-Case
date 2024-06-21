using System;
using System.Security.Cryptography;
using System.Text;

class Program
{
    static void Main()
    {
        string hashObjetivo = "49f68a5c8493ec2c0bf489821c21fc3b";
        char[] caracteres = "abcdefghijklmnopqrstuvwxyz".ToCharArray();
        string passwordEncontrado = null;

        // Aqui se generar todas las combinaciones posibles de 2 caracteres
        foreach (char primeraLetra in caracteres)
        {
            foreach (char segundaLetra in caracteres)
            {
                string password = $"{primeraLetra}{segundaLetra}";
                // Calcular el hash MD5 de la combinación actual
                string hashCalculado = CalcularMD5Hash(password);

                // Comparar el hash calculado con el hash objetivo
                if (hashCalculado == hashObjetivo)
                {
                    passwordEncontrado = password;
                    break;
                }
            }

            if (passwordEncontrado != null)
            {
                break;
            }
        }

        if (passwordEncontrado != null)
        {
            Console.WriteLine($"Password encontrado: {passwordEncontrado}");
        }
        else
        {
            Console.WriteLine("Password no encontrado.");
        }
    }

    static string CalcularMD5Hash(string input)
    {
        using (MD5 md5 = MD5.Create())
        {
            byte[] inputBytes = Encoding.ASCII.GetBytes(input);
            byte[] hashBytes = md5.ComputeHash(inputBytes);

            // Convertir los bytes del hash a una cadena hexadecimal
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < hashBytes.Length; i++)
            {
                sb.Append(hashBytes[i].ToString("x2"));
            }
            return sb.ToString();
        }
    }
}
