import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter( {subsets: ['latin']});
export const lusitana = Lusitana( {
    subsets: ['latin'],        // Specifies the character subsets (e.g., 'latin')
    weight: ['400', '700'],    // Specifies the font weights (as an array of strings)
});
