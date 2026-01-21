import React from 'react';
import Image from 'next/image';

export const LogoE2B = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src="/E2B.svg" alt="E2B" {...props} />
);

export const LogoLinear = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 105 32" fill="currentColor" {...props}>
      <path d="M12.98 9.388h3.334v13.224h-3.334V9.388Zm6.427 0h3.333v2.306L22.712 25h-3.305l-.028-2.278v-2.278l.028-11.056Zm6.37 0h3.334v13.224h-3.334V9.388Zm6.427 0H35.51v2.306L35.482 25h-3.277l-.028-2.278v-2.278l.028-11.056Zm13.844 7.667h-7.861v2.555h7.861v3.001h-11.333V9.387h11.166v3.001h-7.694v2.056h7.861v2.611ZM60.67 22l-1.639 3h-3.694l5.333-15.613h3.667L69.67 25h-3.75l-1.611-3H60.67Zm.778-1.417h2.722l-1.361-2.583-1.361 2.583Zm16.79-4.834h2.556c1.694 0 3.056.445 3.056 2.333 0 1.25-.639 2.056-1.75 2.25l2.028 4.667h-3.61l-1.556-4.084h-.723V25h-3.333V9.388h5.972c3.083 0 4.694 1.25 4.694 3.639 0 2.056-1.166 3.084-3.194 3.445l-4.139-1.25Z" />
    </svg>
)

export const LogoVercel = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src="/vercel.svg" alt="Vercel" {...props} />
)

export const LogoGithub = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.665-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.56 3.285-1.23 3.285-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
)

export const LogoDocker = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
       <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.119a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m0 2.716h2.119a.186.186 0 00.186-.185V6.291a.186.186 0 00-.186-.185h-2.119a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185m-2.953 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m0-2.714h2.119a.186.186 0 00.186-.185V6.291a.186.186 0 00-.186-.185h-2.119a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185m-2.953 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.953 0h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H2.17a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185M22.844 19.34l-11.8 4.54A6.195 6.195 0 018.667 24 .356.356 0 018.33 23.5a9.077 9.077 0 016.908-11.834.18.18 0 00.125-.11.182.182 0 00.015-.157l-1.92-5.744a.184.184 0 01.077-.206l4.634-2.62a.185.185 0 01.258.077l4.32 10.999a.184.184 0 00.224.103l.97-.247a.183.183 0 01.226.172v5.337a.185.185 0 01-.322.13zM23.23 8.89l-4.524 1.343a.5.5 0 01-.63-.47V4.026a.5.5 0 01.815-.389l4.57 3.96a.5.5 0 01-.231.89z" />
    </svg>
)

export const LogoAWS = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
   <img src="/Amazon Web Services_idS5TK0MYh_0.svg" alt="AWS" {...props} />
)

export const LogoYCombinator = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M0 24V0h24v24H0z" fill="#F06529"/>
        <path d="M9.2 6H5.5l5.5 8v6h3.6v-6l5.5-8h-3.7l-3.6 5.6L9.2 6z" fill="#fff"/>
    </svg>
)

export const LogoBloomberg = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src="/Bloomberg_iduVicAUaR_0.svg" alt="Bloomberg" {...props} />
);

export const LogoGoldmanSachs = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src="/Goldman Sachs_Logo_0.svg" alt="Goldman Sachs" {...props} />
);

export const LogoMeta = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src="/Meta_idwdgcJw5c_0.svg" alt="Meta" {...props} />
);

export const LogoMoniepoint = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src="/Moniepoint Group_Logo_0.svg" alt="Moniepoint" {...props} />
);
