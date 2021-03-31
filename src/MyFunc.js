import { db } from "./firebase";

// Fetches All Products from FIRESTORE
const FetchAllProducts = async (setter,loader) =>{
    loader(true);
    await db.collection('Prodcuts').get()
    .then(response => {
      const fetchedProducrs = [];
      response.docs.forEach(document => {
        const fetchedProduct = {
          id: document.id,
          ...document.data()
        };
        fetchedProducrs.push(fetchedProduct);
      });
      setter(fetchedProducrs);
      loader(false);
      console.log(fetchedProducrs);
    })
    .catch(error => {
      console.log(error);
    });
}
export { FetchAllProducts}