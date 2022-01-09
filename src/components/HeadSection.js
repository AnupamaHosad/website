import React from "react";
import { Helmet } from "react-helmet";
  
const HeadSection = () => {
    return ( <Helmet>
        <html lang="en" />
        <title>Anupama Hosad</title>
        {/* <link rel="icon" href="//d2c297xniuypar.cloudfront.net/images/AH.png" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css?family=Lily+Script+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700" rel="stylesheet" />
        <meta name="viewport" content="initial-scale=1,width=device-width" />
        <meta name="description" content="Profile page of Anupama Hosad" />
        <meta name="keywords" content="Anupama, Hosad, UI Engineer, Front end developer, UI, Front end" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149349342-1"></script>
        <script>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());

            gtag("config", "UA-149349342-1");
            `}
        </script>
    </Helmet>);
};

export default HeadSection;