import Spline from '@splinetool/react-spline';

export function SplineCmp() {

    function hello(){
        console.log('hello')
    }

    return <section className="spline">
        <Spline 
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
        onMouseUp={hello}
        scene="https://prod.spline.design/08p8Oqk4OkbuIpK0/scene.splinecode" />
    </section>
}




// import { useRef } from 'react';
// import Spline from '@splinetool/react-spline';

// export function SplineCmp() {
//     const objectToAnimate = useRef();

//     function onLoad(spline) {
//         const obj = spline.findObjectByName('Cube');
//         // save the object in a ref for later use
//         objectToAnimate.current = obj;
//     }

//     function triggerAnimation() {
//         objectToAnimate.current.emitEvent('mouseHover');
//     }

//     return (
//         <div>
//             <Spline
//                 scene="https://prod.spline.design/08p8Oqk4OkbuIpK0/scene.splinecode"
//                 onLoad={onLoad}
//             />
//             <button type="button" onClick={triggerAnimation}>
//                 Trigger Spline Animation
//             </button>
//         </div>
//     );
// }


// import React, { Suspense } from 'react';

// const Spline = React.lazy(() => import('@splinetool/react-spline'));

// export function SplineCmp() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Spline scene="https://prod.spline.design/08p8Oqk4OkbuIpK0/scene.splinecode" />
//       </Suspense>
//     </div>
//   );
// }