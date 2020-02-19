import React, {useState, useEffect} from 'react';

const BuildingList = (props) => {
    console.log('This is my directory file', props.data);
    const entry = props.text;
    const buildingList = props.data.map(directory => {
        return (
            <tr key={directory.id}>
                <td>{directory.code} </td>
                <td> {directory.name} </td>
            </tr>
        );
    })//.filter(dirName => {
     //   return dirName.name.indexOf(props.text) >= 0
   // });

    return <div>{buildingList}</div>;
};
export default BuildingList;