
import "./globals.css";


/* 

export default function RootLayout({ children, })

    Make a function named RootLayout, and it will receive something called children (whatever you put inside this layout). Also, export it so Next.js can use it. 
     

         Readonly<{
            children: React.ReactNode;
          }>)
     The function receives a prop object with a children field, whose type is React.ReactNode, and that prop object cannot be mutated.

*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
         {children}
      </body>
    </html>
  );
}



























