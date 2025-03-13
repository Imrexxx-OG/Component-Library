* {
    box-sizing: border-box;
}


#root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
}

body {
    height: 100vh;
    margin: 0;
    padding: 10px;
    display: flex;
    justify-content: center;
    /* background-color: azure; */
}

/* .sub-header {
    
    width: 146px;
    height: 63px;
    font-family: 'Permanent Marker';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 63px;
    color: #000000;
} */

/* Badges component */

.general-badge-container h2 {
    /* Square */
    /* position: absolute; */
    width: 68px;
    height: 16px;
    /* padding-bottom: 1rem; */
    font-family: 'Permanent Marker';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 16px;
    /* identical to box height, or 80% */
    /* text-align: right; */
    color: #5E5D5D;
}

.badges-container{
   display: flex;
   justify-content: space-between;
   max-width: 70vw;
   
}

button.button-square, button.button-pill{
    font-weight: bold;
}

button.button-gray{
    padding: 2px 12px;
    position: relative;
    width: 70px;
    height: 34px;
    background: #F3F4F6;
    border-radius: 4px;
    color: #1F2937;
}
button.button-red{
    padding: 2px 12px;
    position: relative;
    width: 70px;
    height: 34px;
    background: #FEE2E2;
    border-radius: 4px;
    color: #991B1B;
}
button.button-yellow{
    padding: 2px 12px;
    position: relative;
    width: 70px;
    height: 34px;
    background: #FEF3C7;
    border-radius: 4px;
    color: #92400E;
}
button.button-green{
    padding: 2px 12px;
    position: relative;
    width: 70px;
    height: 34px;
    background: #D1FAE5;
    border-radius: 4px;
    color: #065F46;
}
button.button-blue{
    padding: 2px 12px;
    position: relative;
    width: 70px;
    height: 34px;
    background: #DBEAFE;
    border-radius: 4px;
    color: #1E40AF;
}
button.button-indigo{
    padding: 2px 12px;
    position: relative;
    width: 70px;
    height: 34px;
    background: #E0E7FF;
    border-radius: 4px;
    color: #3730A3;
}
button.button-purple{
    padding: 2px 12px;
    position: relative;
    width: 70px;
    height: 34px;
    background: #EDE9FE;
    border-radius: 4px;
    color: #5B21B6;
}
button.button-pink{
    padding: 2px 12px;
    position: relative;
    width: 70px;
    height: 34px;
    background: #FCE7F3;
    border-radius: 4px;
    color: #9D174D;
}

/* Banners component */

.banners-container h2{
    /* Neutral */
    /* position: absolute; */
    width: 173px;
    height: 63px;

    font-family: 'Permanent Marker';
    font-style: normal;
    font-weight: 400;
    font-size: 44.1px;
    line-height: 63px;
    /* identical to box height, or 143% */
    text-align: right;
    color: #5E5D5D;
}

.banner-error{
    color: #92400E;
}
.banner-neutral{
    color: #1E40AF;
}
.banner-success{
    color: #065F46;
}

.banner-warning{
    color: #92400E;
}

.banner-button-green p {
    color: #047857;
}

.banner-button-yellow p {
    color: #92400E;
}

.banner-button-blue p {
    color: #1C51B9;
}

.banner-button-red p {
    color: #B45309;
}

.banner-green{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 12px;
    position: relative;
    width: 896px;
    height: 80px;
    background: #ECFDF5;
    border-radius: 6px;
}

.banner-button-green{
    padding: 0px;
    gap: 10px;
    width: 832px;
    height: 48px;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 1;
}

.banner-yellow{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 12px;
    position: relative;
    width: 896px;
    height: 80px;
    background: #FFFBEB;
    border-radius: 6px;
}

.banner-button-yellow{
    padding: 0px;
    gap: 10px;
    width: 832px;
    height: 50px;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 1;
}

.banner-red{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 12px;
    position: relative;
    width: 896px;
    height: 80px;
    background: #FEF2F2;
    border-radius: 6px;
}

.banner-button-red{
    padding: 0px;
    gap: 10px;
    width: 832px;
    height: 48px;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 1;
}

.banner-blue{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 12px;
    position: relative;
    width: 896px;
    height: 80px;
    background: #EFF6FF;
    border-radius: 6px;
}

.banner-button-blue{
    padding: 0px;
    gap: 10px;
    width: 832px;
    height: 48px;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 1;
}

.icon-container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon-container span{
    padding-left: 0.5rem;
}


/* Card component */
#cards{
    text-align: center;
}

.card-container {
    /* Auto layout */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 24px 32px;
    gap: 22px;
    width: 384px;
    height: 208px;
    background: #F9FAFB;
    border-radius: 8px;
    /* Inside auto layout  */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

}

/* Testimonial Component */
.testimonial-with-pic{
    /* With overlapping image/Desktop */
    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 96px 0px;

    position: relative;
    width: 1358px;
    height: 592px;
}

.testimonial-no-pic{
    /* Simple centered/Desktop */
    

    position: relative;
    width: 1358px;
    height: 444px;
    background: #F9FAFB;

}