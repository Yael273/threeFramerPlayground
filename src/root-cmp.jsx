import './assets/styles/main.scss';
import { AppHeader } from './cmps/app-header';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';

export function RootCmp() {

  return (
    <div className="App">
      <AppHeader />
      <main>
        <Routes>
          {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
        </Routes>
      </main>
    </div>
  );
}

// export function AnimatedSphere2() {
//   return (
//     <mesh>
//       <Sphere visible args={[1, 100, 200]} scale={1}>
//         <MeshDistortMaterial
//           color="#e969aa"
//           attach="material"
//           distort={0.6}
//           speed={1.2}
//           roughness={5}
//         />
//         {/* <meshNormalMaterial attach="material" /> */}
//       </Sphere>

//     </mesh>

//   )
// }

// export function Box() {
//   // const colorMap = useLoader(TextureLoader, texture)
//   // const colorMap = useLoader(TextureLoader)

//   return (
//     <mesh rotation={[90, 0, 20]}>
//       <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
//       {/* <meshLambertMaterial
//         attach="material"
//         color='pink'
//       // map={colorMap} 
//       /> */}
//       <meshNormalMaterial attach="material" />
//     </mesh>
//   );
// }

