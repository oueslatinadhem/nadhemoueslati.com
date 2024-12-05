import { ImageResponse } from '@vercel/og';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generateOgImage() {
  try {
    const imageResponse = new ImageResponse(
      {
        type: 'div',
        props: {
          style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: '#818cf8',
            backgroundImage: 'linear-gradient(135deg, #818cf8, #c084fc)',
            padding: '60px',
          },
          children: [
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  marginLeft: '60px',
                },
                children: [
                  {
                    type: 'h1',
                    props: {
                      style: {
                        fontSize: '72px',
                        fontWeight: 700,
                        color: 'white',
                        margin: '0 0 20px 0',
                        lineHeight: 1.1,
                      },
                      children: 'Nadhem OUESLATI',
                    },
                  },
                  {
                    type: 'h2',
                    props: {
                      style: {
                        fontSize: '36px',
                        color: 'rgba(255, 255, 255, 0.9)',
                        margin: '0 0 30px 0',
                        fontWeight: 500,
                      },
                      children: 'Chef de Projet Digital',
                    },
                  },
                  {
                    type: 'p',
                    props: {
                      style: {
                        fontSize: '24px',
                        color: 'rgba(255, 255, 255, 0.8)',
                        margin: 0,
                      },
                      children: 'E-commerce • Gestion de Projet • Transformation Digitale',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        width: 1200,
        height: 630,
      }
    );

    const buffer = await imageResponse.arrayBuffer();
    await fs.writeFile(
      path.join(__dirname, '../public/og-image.png'),
      Buffer.from(buffer)
    );

    console.log('OpenGraph image generated successfully!');
  } catch (error) {
    console.error('Error generating OpenGraph image:', error);
    process.exit(1);
  }
}

generateOgImage();