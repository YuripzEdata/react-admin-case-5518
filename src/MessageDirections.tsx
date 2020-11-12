import * as React from "react";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { List, Datagrid, TextField, NumberField , CreateButton, DateField,  EditButton, Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, Create } from 'react-admin';
import { Filter, SimpleList, useListContext  } from 'react-admin';


function myClick() {
    let isDone: boolean = false;

    console.log(isDone);
}

const ShowListContex = () => {
    const { data } = useListContext();
    console.log( "useListContext()=data: ", data);
}

const Empty = () => {
    const { basePath, resource, data } = useListContext();
    console.log( "useListContext()=data: ", data);
    return (
        <Box textAlign="center" m={1}>
            <Typography variant="h4" paragraph>
                No products available
            </Typography>
            <Typography variant="body1">
                Create one or import from a file
            </Typography>
            <CreateButton basePath={basePath} />
            <Button onClick={ myClick } >
                Import</Button>
        </Box>
    );
};


// const MyAside = () => (
//     <div style={{ width: 200, margin: '1em' }}>
//         <Typography variant="h6">Post details</Typography>
//         <Typography variant="body2">
//             { 'console.log( "useListContext()=data: " )'  }
//         </Typography>
//     </div>
// );
//
// const ShowDataAside = (data: any) => {
//     let i :number = 0;
//     let isMUM :boolean = data.propertyIsEnumerable();
//     let isArray :boolean = Array.isArray( data );
//     return (
//         <div>
//             <div> {`data.propertyIsEnumerable() ` + isMUM} </div>
//             <div> {`Array.isArray( data ) ` + isArray} </div>
//         </div>
//     );
// };

// const ShowArrayAside = (data: any,  ids :number) => {
//     let i :number = 0;
//     let isMUM :boolean = data.propertyIsEnumerable();
//     let isArray :boolean = Array.isArray( data );
//     return (
//         <div>
//             <div> {`data.propertyIsEnumerable() ` + isMUM} </div>
//             <div> {`Array.isArray( data ) ` + isArray} </div>
//         </div>
//     );
// };


const Aside = () => {
    const { data, ids } = useListContext();
    console.log( "useListContext()=data: ", data);
    console.log( "useListContext()=ids: ", ids.length);
    return (
        <div style={{ width: 200, margin: '1em' }}>
            <Typography variant="h6">MessageDirection stats</Typography>
            <Typography variant="body2">
                {/*Show status views: { ShowDataAside( data) }*/}
                {/*Total views: {ids.map(id => data[id]).reduce((sum, MessageDirections) => sum + MessageDirections.Num_Thread, 0)}*/}
                <span>
                data: {ids.map(id => data[id]).map((MessageDirectionRecord, idex ) => {
                    return (<span key={idex}> <span>{MessageDirectionRecord.Msgdirection_Cod}</span>
                            </span> ) ;
                      } )
                }
                </span>
            </Typography>
            {/*<Button onClick={ myClick } >*/}
            {/*    Import</Button>*/}
        </div>
    );
};

// export const  MessageDirections = (props: any) => {
//     //const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
//     console.log("MessageDirections_props:", props);

    //const { basePath, resource, data } = useListContext();
    // console.log( "useListContext()=data: ", data); empty={<Empty />}
    //                 <EditButton onClick={ShowListContex} />
    {/*<NumberField source="Num_Helpers_Thread" />*/}
    {/*<TextField source="Wsdl_Name" />*/}
    {/*    <NumberField source="Type_Connect" />*/}
    {/*    <NumberField source="Long_Retry_Interval" />*/}
    {/*    <NumberField source="Short_Retry_Count" />*/}
    {/*    <TextField source="Db_User" />*/}
    {/*    <TextField source="Msgdirection_Desc" />*/}
    {/*    <NumberField source="Short_Retry_Interval" />*/}
    {/*    <TextField source="List_Lame_Threads" />*/}
    {/*<NumberField source="Long_Retry_Count" />*/}
    {/*<TextField source="Db_Pswd" />*/}
    {/*<TextField source="Attachment_Dir" />*/}
    {/*    <NumberField source="Subsys_Cod" />*/}
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
// export default MessageDirections;