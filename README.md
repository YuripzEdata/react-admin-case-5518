# react-admin-case-5518
issue 5518 for react-admin
**What you were expecting:**
as described  by documentation, the simplest React App was prepared:
*App.tsx*
```
    return (
        <Admin dataProvider={dataProvider} dashboard={Dashboard} title={'Dashboard'}>
            <Resource  name="MessageDirections" list={MessageDirections}>
            </Resource>
        </Admin>
  );
```
*MessageDirections.tsx*
```
export const  MessageDirections = (props: any) => {
    return (
            <List aside={<Aside />} { ...props } title={"Datagrid"} perPage={5} >
                <Datagrid>
                    <NumberField source="id" />
                    <DateField source="Last_Update_Dt" />
                    <TextField source="Msgdirection_Cod" />
                    <TextField source="Msgdirection_Desc" />
                    <NumberField source="Num_Thread" />
                </Datagrid>
            </List>
        );
};
```
Component *<Aside/>* was used for additional checking data response from  Data Provider ( via console.log ) :
```
const Aside = () => {
    const { data, ids } = useListContext();
    console.log( "useListContext()=data: ", data);
    console.log( "useListContext()=ids: ", ids.length);
. . .
};
```
**What happened instead:**

![изображение](https://user-images.githubusercontent.com/74334172/98886231-af58c900-24a4-11eb-987d-5377bc441ffd.png)


**Steps to reproduce:**
<!--  Please explain the steps required to duplicate the issue, especially if you are able to provide a sample application. -->

**Related code:**
<!-- If you are able to illustrate the bug or feature request with an example, please provide a sample application via one of the following means: -->

* Preferably, a CodeSandbox forked from https://codesandbox.io/s/github/marmelab/react-admin/tree/master/examples/simple
* A link to a GitHub repo with the minimal codebase to reproduce the issue


```
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
```
Data Provider getList return *Json* : Array of 5 oblects, browser console show its.
```
response.data isArray= true 
(5) […]
​
0: Object { Long_Retry_Count: 0, Num_Helpers_Thread: 0, Wsdl_Name: "http://center.tgrad:80/DatumNode/DatumNode.svc/basic", … }
​1: Object { Long_Retry_Count: 5, Num_Helpers_Thread: 0, Wsdl_Name: "http://10.36.130.74:5201/WsBridge", … }
​2: Object { Num_Helpers_Thread: 0, Wsdl_Name: "http://center.tgrad:80/DatumNode/DatumNode.svc/basic", Type_Connect: 3, … }
​3: Object { Long_Retry_Count: 5, Num_Helpers_Thread: 0, Wsdl_Name: "http://center.tgrad:80/DatumNode/DatumNode.svc/basic", … }
​4: Object { Num_Helpers_Thread: 0, Wsdl_Name: "http://10.28.88.241:80/CMS_B2B/additional/wservice.nsf/WsHermesAPI/", Type_Connect: 3, … }
​```
length: 5
​
<prototype>: Array []
:96
response :97
data.length= 5 :99


**Other information:**
<!-- List any other information that is relevant to your issue. Stack traces, related issues, suggestions on how to fix, Stack Overflow links, forum links, etc. For visual or layout problems, please include images or animated gifs.-->

**Environment**

* React-admin version: 3.10
* React version: 17.0.1 ( DISABLE_NEW_JSX_TRANSFORM=true )
* Type Script : 4.0.3
* Browser: Firefox 82.0.2
* Stack trace (in case of a JS error): no  JS error
