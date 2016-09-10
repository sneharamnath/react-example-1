import React from 'react';
import CandidateItem from './CandidateItem';
import Filter from './Filter';

class CandidateList extends React.Component {
        constructor() {
            super();
            this.state = {
                candidates: [],
                location: ''
            };

            this.candidates = [];
            this.setLocation = this.setLocation.bind(this);
        }
        componentDidMount() {
            this.request = $.getJSON(this.props.url, (data) => {
                this.setState({
                    candidates: data.candidates
                });
                this.candidates = data.candidates;
            });
        }
        filterCandidates(location, company, searchText) {
            let loc = this.candidates;
            if (location) {
                loc = loc.filter((candidate) => {
                    return candidate.current_location === location;
                });
            }
            if (company) {
                loc = loc.filter((candidate) => {
                    return candidate.current_company === company;
                });
            }
            if (searchText !== '') {
                let tempArr = [];
                loc.forEach(function(item) {
                    if (item.first_name.toLowerCase().indexOf(searchText) != -1)
                        tempArr.push(item);
                });
                loc = tempArr;
            }
            this.setState({
                candidates: loc
            });
        }
        setLocation(location, company, searchText) {
            this.setState({
                location: location,
                company: company,
                searchText: searchText
            });

            this.filterCandidates(location, company, searchText);
        }
        render() {
            return ( < div >
                < div >
                < span > Selected Filter: { this.state.location } { this.state.company } < /span>  < /div > < Filter onLocationChange = { this.setLocation }
                url = "http://104.199.147.85/meta" / > {
                    this.state.candidates.map((candidate, index) => {
                            return ( < CandidateItem candidate = { candidate }
                                key = { index }
                                />)
                            })

                    } < /div>
                );
            }
        }

        export default CandidateList;
