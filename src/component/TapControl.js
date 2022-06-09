import React from 'react';
import NewTapForm from './NewTapForm';
import TapList from './TapList';
import TapBrand from "./TapBrand";
import TapInfo from './TapInfo';

class TapControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisible: false,
            mainTapList: TapInfo,
            selectedTap: null,
            editing: false
            
        };
    }
    handleClick = () => {
        if (this.state.selectedTap != null) {
            this.setState({
                formVisible: false,
                selectedTap: null,
            });
        } else {
            this.setState(prevState => ({
                formVisible: !prevState.formVisible,
            }));
        }
    }
    handleChangingSelectedTap = (tapId) => {
        const selectedTap = this.state.mainTapList.filter(tap => tap.id === tapId)[0];
        this.setState({selectedTap: selectedTap});
    }
    handleAddingNewTapToList = (newTap) => {
        const newMainTapList = this.state.mainTapList.concat(newTap);
        this.setState({
            mainTapList: newMainTapList,
            formVisibleOnPage: false
        });
    }
    
    handleDecreasingTapQuantity = tapId => {
        const newMainTapList = this.state.mainTapList.map((element) => {
            if (element.id === tapId && element.quantity >= 1) {
                const tap = {...element, quantity: element.quantity -1}
                return tap;
            }
            return element;
        });
        this.setState({
            mainTapList: newMainTapList
        });
    }

    render () {
        let currentlyVisibleState = null;
        let buttonText = null;
        
        if (this.state.selectedTap !== null) {
            currentlyVisibleState = <TapBrand tap={this.state.selectedTap} />
            buttonText="Return to Tap List";
        }else if (this.state.formVisible) {
            currentlyVisibleState = <NewTapForm OnNewTapCreation={this.handleAddingNewTapToList} />
            buttonText="Return to Tap List";
        } else {
            currentlyVisibleState = <TapList tapList={this.state.mainTapList} onTapSelection={this.handleChangingSelectedTap} onDecrementingTap={this.handleDecreasingTapQuantity} />
            buttonText="Add a new keg?";
        }
        
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>{" "}
            </React.Fragment>
        );
    }
}

export default TapControl;