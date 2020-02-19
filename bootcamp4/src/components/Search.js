import React from 'react';

const Search = (props) => {
   let myVal = null
    /*const onChange = (e) => {
        console.log(e.target.value);
    }*/
    const filterUpdate = () => {
        const val = myVal.value
        
        props.filterUpdate(val)
        //Here you will need to update the value of the filter with the value from the textbox
    };
    //You will need to save the value from the textbox and update it as it changes
    //You will need the onChange value for the input tag to capture the textbox value

    return (
        <form>
            <input type="text" placeholder="Type to Filter"
                ref={(value) => {myVal = value}} onChange={filterUpdate}/>
        </form>
    );

};

export default Search;
