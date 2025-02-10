import { useContext, useState, useEffect } from "react";
import Card from "../../Componentes/Card";
import Layaout from "../../Componentes/Layout";
import ProductDetail from "../../Componentes/ProductDetail";
import { ShoppingCartContext } from "../../Contex";

function Home() {
    const context = useContext(ShoppingCartContext);
    const [loading, setLoading] = useState(true); // Estado para la carga

    useEffect(() => {
        if (context.items && context.items.length > 0) { // Verifica si hay datos
            setLoading(false); // Desactiva la carga cuando hay datos
        } else if (context.items === null) { // Si items es null (aún no se han cargado)
          setLoading(true); // Mantén el loading activo
        }
    }, [context.items]); // Dependencia de context.items

    const renderView = () => {
         
        if (loading) {
            return <div>Loading...</div>; // Mensaje de carga
        } else if (context.filtereditems?.length > 0) {
            console.log(context.filtereditems?.length)
            return context.filtereditems.map((item) => (
                <Card key={item.id} data={item} />
            ));
        } else {
            return <div>We don't have anything :(</div>;
        }
    };

    return (
        <Layaout>
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className="font-medium text-xl">Exclusive Products</h1>
            </div>
            <input
                type="text"
                placeholder="Search a product"
                className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
                onChange={(event) => context.setSearchByTitle(event.target.value)}
            />
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {renderView()}
            </div>
            <ProductDetail />
        </Layaout>
    );
}

export default Home;

// import { useContext } from "react"
// import Card from "../../Componentes/Card"
// import Layaout from "../../Componentes/Layout"
// import ProductDetail from "../../Componentes/ProductDetail"
// import { ShoppingCartContext } from "../../Contex"

// function Home() {
//   const context = useContext(ShoppingCartContext)
  

//   const renderView = () => {
//     console.log(context)
//     if (context.filteredItems?.length > 0) {
//       return (
//         context.filteredItems?.map(item => (
//           <Card key={item.id} data={item} />
//         ))
//       )
//     } else {
//       return (
//         <div>We don't have anything :(</div>
//       )
//     }
//   }



//   return (
//     <Layaout>
//       <div className='flex items-center justify-center relative w-80 mb-4'>
//         <h1 className='font-medium text-xl'>Exclusive Products</h1>
//       </div>
//       <input
//         type="text"
//         placeholder='Search a product'
//         className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
//         onChange={(event) => context.setSearchByTitle(event.target.value)} />
//       <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
//         {
//           renderView()
//         }
//       </div>
//       <ProductDetail />
//     </Layaout>
//   )
// }

// export default Home
