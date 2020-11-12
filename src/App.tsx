import React from 'react';
import './App.css';
import { Admin,  Resource, ListGuesser  } from 'react-admin';

//import restDataProvider from 'ra-data-rest-client'; //  ra-data-rest-client
// Extends marmelab/ra-data-simple-rest with the abilty to work with resources that do not use 'id' as their unique identifier property name on the server side, and the ability to add a response transform function to a resource.
// import simpleRestProvider from 'ra-data-simple-rest';
import myDataProvider from "./data-provaider/myDataProvider";
import validateResponseFormat from "./data-provaider/validateResponseFormat";
import Dashboard from "./Dashboard";
import {MessageDirections} from "./MessageDirections";
//import {MessageDirectionsSimpleList} from "./MessageDirectionsSimpleList"


// function mApp() {
//     let isDone: boolean = false;
//
//     console.log(isDone);
// //   let mydecimal: number = 6;
// //   let hex: number = 0xf00d;
// //   let binary: number = 0b1010;
// //   let octal: number = 0o744;
// //
// //   console.log(mydecimal);
// //   console.log(hex);
// //   console.log(binary);
// //   console.log(octal);
// //
// //    function  my_sentence() {
// //     let fullName: string = `Bob Bobbington`;
// //     let age: number = 37;
// //     let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;
// //     return sentence;
// //   }
// // function sring_listOF () : string {
// //   let listOF: number[] = [4, 7, 3, 9];
// //   let i: number;
// //   let sring_listOF: string=`: `;
// //   for ( i  = 0; i < listOF.length; i++ ) {
// //     console.log(i, ': sring_listOF:' , listOF[i]);
// //     sring_listOF = sring_listOF + `${ listOF[i] } `;
// //
// //   }
// //   return sring_listOF;
// //   //listOF.map()=> { };
// // }
// //
// // function x_collection () {
// //   let collection: [string, number];
// //   collection = [  'hello', 10];
// // return collection;
// // }
// //
// //   function f ([first, second ]: [number, number]):string {
// //     console.log(first);
// //     console.log(second);
// //     return ( `${first} & ${second}`);
// //   }
// //
// //  function rr() {
// //    {
// //      const resource = {
// //        a: 'a',
// //        b: 1
// //      };
// //
// //      let {a, b}: { a: string, b: number } = resource;
// //
// //      console.log(a);
// //      console.log(b);
// //    }
// //
// //  }
//     // String
//     let color: string = "blue";
//     color = 'red';
//
//     console.log(color);
// }

 //   let dataProviderURL: string = (process.env.PUBLIC_URL as string);
   const dataProvider = myDataProvider("http://localhost:8008/HermesService/InternalRestApi/apiSQLRequest");

const App = () => {
    //let dataProviderURL: string = (process.env.REACT_JSON_API_BASE_URL as string);
    // console.log("dataProviderURL=", dataProviderURL);

    dataProvider.getList('MessageDirections',
        { pagination: { page: 1, perPage: 5 },
                  sort: { field: 'Msgdirection_Cod', order: 'ASC' },
                  filter: { msgdirection_cod: 'ONLINE' }
            }
        )
        .then(  response => {
                    console.log("response.data isArray=", Array.isArray(response.data) );
                    console.log(response.data);
                     console.log("response");
                    validateResponseFormat(response, 'getList');
                if ( Array.isArray(response.data) )
                    console.log( 'data.length=', response.data.length);
                }
             );

/*
      <Admin dataProvider={dataProvider}
             dashboard={Dashboard}
             title={'Доска почёта'}
              >
          <Resource  name="MessageDirections"
                     list={MessageDirections}>
          </Resource>
            <Resource  name="MessageDirections"
                       list={MessageDirectionsSimpleList}>
            </Resource>

            <Resource name="tags" />
      </Admin>
 */
    return (
        <Admin dataProvider={dataProvider} dashboard={Dashboard} title={'Dashboard'}>
            <Resource  name="MessageDirections" list={MessageDirections}>
            </Resource>
        </Admin>
  );
};

export default App;
