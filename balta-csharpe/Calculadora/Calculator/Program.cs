using System;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            Menu();
        }

        static void Menu(){
            Console.Clear();
            Console.WriteLine("Digite o número correspondente para escolher a operação que deseja realizar: ");
            Console.WriteLine("1 - Soma; \n 2 - Subtração; \n 3 - Divisão; \n 4 - Multiplicação; \n 5 - Sair.");

            int escolha = int.Parse(Console.ReadLine());

            switch(escolha){
                case 1:
                    Soma();
                    break;
                case 2: 
                    Subtracao();
                    break;
                case 3:
                    Divisao();
                    break;
                case 4: 
                    Multiplicacao();
                    break;
                case 5:
                System.Environment.Exit(0);
                break;
                default:
                Console.WriteLine("Você digitou uma opção inválida."); 
                break;  
            }
            Console.ReadKey();

        }

        static void Soma()
        {
            Console.Clear();
            Console.WriteLine("Primeiro valor: ");
            float v1 = float.Parse(Console.ReadLine());
            Console.WriteLine("Segundo valor:");
            float v2 = float.Parse(Console.ReadLine());

            Console.WriteLine("");

            float resultado = v1 + v2;
            Console.WriteLine($"O resultado da soma é: {resultado}");
            Console.ReadKey();
            Menu();
        }

        static void Subtracao()
        {
            Console.Clear();
            Console.WriteLine("Primeiro valor: ");
            float v1 = float.Parse(Console.ReadLine());
            Console.WriteLine("Segundo valor: ");
            float v2 = float.Parse(Console.ReadLine());

            Console.WriteLine("");
            Console.WriteLine($"O resultado da subtração é: {v1 - v2}");
            Console.ReadKey();
            Menu();
        }
        

        static void Divisao()
        {
            Console.Clear();
            Console.WriteLine("Primeiro valor: ");
            float v1 = float.Parse(Console.ReadLine());

            Console.WriteLine("Segundo valor:");
            float v2 = float.Parse(Console.ReadLine());

            Console.WriteLine("");
            float resultado = (v1 / v2);

            Console.WriteLine($"O resultado da divisão é: {resultado}");

            Console.ReadKey();
            Menu();
        }

               static void Multiplicacao()
        {
            Console.Clear();
            Console.WriteLine("Primeiro valor: ");
            float v1 = float.Parse(Console.ReadLine());

            Console.WriteLine("Segundo valor:");
            float v2 = float.Parse(Console.ReadLine());

            Console.WriteLine("");
            float resultado = (v1 * v2);

            Console.WriteLine($"O resultado da multiplicação é: {resultado}");

            Console.ReadKey();
            Menu();
        }
    }
}