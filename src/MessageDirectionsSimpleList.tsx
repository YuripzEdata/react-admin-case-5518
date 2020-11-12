import * as React from "react";
import { List , SimpleList, useListContext  } from 'react-admin';




const Aside = () => {
    const { data, ids } = useListContext();
    console.log( "useListContext()=data: ", data);
    console.log( "useListContext()=ids: ", ids.length);
    return (
        <div style={{ width: 200, margin: '1em' }}>
            Show status views
        </div>
    );
};

const postRowStyle = (record:any, index:any ) => ({
    backgroundColor: record.nb_views >= 500 ? '#efe' : 'white'
});

export const  MessageDirectionsSimpleList = (props: any) => {
    //const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    console.log("MessageDirectionsSimpleList_props:", props);

    //const { basePath, resource, data } = useListContext();
    // console.log( "useListContext()=data: ", data);
    return (
        <List  aside={<Aside />} { ...props } title={"Список ситем"} perPage={5} >
            <SimpleList
                primaryText={record => record.Msgdirection_Desc}
                secondaryText={record => `${record.Msgdirection_Cod} Msgdirection_Cod`}
                tertiaryText={record => new Date(record.Last_Update_Dt).toLocaleDateString()}
                linkType="show"
        />

        </List>

    );
};