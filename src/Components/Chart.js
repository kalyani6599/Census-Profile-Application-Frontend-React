import React, { Component } from 'react'
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
export class Chart extends Component {
        constructor(props) {
                super(props);
                this.state = { Data: {}, Data1: {} };
        }
        componentDidMount() {
                axios.get('http://localhost:8081/api/member')
                        .then(res => {
                                console.log(res);
                                const ipl = res.data;
                                let Gender = [];
                                let age = [];
                                let cnt = [];
                                let cnt1 = [];
                                let lab = ['Male', 'Female', 'Other'];
                                let lab1 = ['Between 1-20', 'Between 21-50', 'Greater than 51'];
                                let count = 0;
                                let count1 = 0;
                                let count2 = 0;
                                let agecount = 0;
                                let agecount1 = 0;
                                let agecount2 = 0;
                                ipl.forEach(record => {
                                        Gender.push(record.gender);
                                        age.push(record.age);
                                });

                                Gender.forEach(Item => {
                                        if (Item == "MALE") {
                                                count = count + 1;
                                        }
                                        else if (Item == "FEMALE") {
                                                count1 = count1 + 1;
                                        }
                                        else {
                                                count2 = count2 + 1;
                                        }
                                });

                                age.forEach(Item => {
                                        if (Item >= 1 && Item <= 20) {
                                                agecount = agecount + 1;
                                        }
                                        else if (Item >= 21 && Item <= 50) {
                                                agecount1 = agecount1 + 1;
                                        }
                                        else if (Item >= 51 && Item <= 125) {
                                                agecount2 = agecount2 + 1;
                                        }
                                });

                                cnt[0] = count;
                                cnt[1] = count1;
                                cnt[2] = count2;

                                cnt1[0] = agecount;
                                cnt1[1] = agecount1;
                                cnt1[2] = agecount2;
                                this.setState({
                                        Data: {

                                                labels: lab,
                                                datasets: [
                                                        {
                                                                label: 'Gender Ratio',

                                                                data: cnt,
                                                                backgroundColor: [
                                                                        "#3cb371",
                                                                        "#0000FF",
                                                                        "#9966FF",
                                                                        "#4C4CFF",
                                                                        "#00FFFF",
                                                                        "#f990a7",
                                                                        "#aad2ed",
                                                                        "#FF00FF",
                                                                        "Blue",
                                                                        "Red"
                                                                ]
                                                        }
                                                ]
                                        }
                                });
                                this.setState({
                                        Data1: {

                                                labels: lab1,
                                                datasets: [
                                                        {
                                                                label: 'Gender Ratio',

                                                                data: cnt1,
                                                                backgroundColor: [
                                                                        "#3cb371",
                                                                        "#0000FF",
                                                                        "#9966FF",
                                                                        "#4C4CFF",
                                                                        "#00FFFF",
                                                                        "#f990a7",
                                                                        "#aad2ed",
                                                                        "#FF00FF",
                                                                        "Blue",
                                                                        "Red"
                                                                ]
                                                        }
                                                ]
                                        }
                                });
                        })
        }
        render() {
                return (
                        <div>
                                <div>
                                        <h2 className="chart">GENDER RATIO</h2>
                                        <Pie
                                                data={this.state.Data}
                                                options={{ maintainAspectRatio: false }} />

                                </div>
                                <div>
                                        <h2 className="chart" >AGE RATIO</h2>
                                        <Pie
                                                data={this.state.Data1}
                                                options={{ maintainAspectRatio: false }} />
                                </div>
                        </div>



                )
        }
}
export default Chart;