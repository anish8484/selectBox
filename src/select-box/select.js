import React from 'react';
import './select.css';

class SelectBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: this.props.lists || [],
            showLists: false,
            selectedList: {
                "code": "",
                "name": "Select Destination...",
                "city": "",
                "state": "",
                "country": "",
            },
            loading: true
        }
    }

    dropDownClick = () => {
        this.setState(prevState => ({
            loading: !prevState.showLists ? false : true,
        }))
        
        // Delay to show loading
        setTimeout(() => {
            this.setState(prevState => ({
                showLists: !prevState.showLists,
                loading: true
            }));
        }, 500);
    }

    selectChange = (list) => this.setState ({
        selectedList: list,
        showLists: false,
    })

    render() {
        return (
            <div>
            
            <div className="selectBox">
                <div className="selectContainer">
                    <div className="selectedList"> 
                        <span> {this.state.selectedList.name} </span> 
                        <span className={`${this.state.selectedList.code ? 'selectCode': ''}`}>{this.state.selectedList.code}</span>
                        <span className={`${this.state.selectedList.city ? 'selectCity': ''}`}>{this.state.selectedList.city}</span>
                        <span className={`${this.state.selectedList.country ? 'selectCountry': ''}`}>{this.state.selectedList.country}</span>
                    </div>
                    <div className="arrow" onClick={this.dropDownClick}>
                        <span className={`${this.state.showLists ? 'arrowUp': 'arrowDown'}`}/>
                    </div>
                    {this.state.loading ?
                        (<div className={`${this.state.showLists ? "selectLists": "hidden"}`}>
                            {
                                this.state.lists.map(list => <div
                                    key={list.code}
                                    onClick={()=> this.selectChange(list)}
                                    className={this.state.selectedList === list ? 'selected' : ''}
                                >
                                    <span> 
                                        <span> {list.name} </span> 
                                        <span className='selectCode'>{list.code}</span>
                                        <span className='selectCity'>{list.city}</span>
                                        <span className='selectCountry'>{list.country}</span>
                                    </span>
                                </div>)
                            }
                        </div>) : <span>Loading...</span> }
                </div>
            </div>
            
            </div>
        )
    }
}

export default SelectBox;
