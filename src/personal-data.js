import React from 'react';
import { MdPersonOutline } from 'react-icons/md';
import { BiMedal } from 'react-icons/bi';
import { GiBlackBook } from 'react-icons/gi';

export const messages = [
    {
        id: 1,
        text: "An passionate and motivated individual capable of doing many things with eagerness to learn new technologies to build a successful career."
    },
    {
        id: 2,
        text: "I'm seeking a challenging situation where I can grow a lot, showcase my potential, and be part of the organization's success."
    },
    {
        id: 3,
        text: "I'm a graduating student from STI College with basic knowledge on web development and currently looking for entry level/junior position."
    },
]


const personal = [
    {
        label: 'Name:',
        text: "Jay Mark B. Munda",
    },
    {
        label: 'Age:',
        text: "23 years old",
    },
    {
        label: "Gender: ",
        text: "Male",
    },
    {
        label: "Birthday: ",
        text: "April 26, 1999",
    },
    {
        label: "Address:  ",
        text: "Balagtas Bulacan, Philippines"
    },  
]

const tabs = [
    {
        id: 1,
        title: 'Personal',
        icon: <MdPersonOutline />,
    }, 
    {
        id: 2,
        title: 'Education',
        icon: <GiBlackBook />,
    },
    {
        id: 3,
        title: 'Awards',
        icon: <BiMedal />,
    }
]


const education = [
        {
            id: 1,
            level: "College",
            location: "STI College Balagtas - Bachelor of Science in Information Technology",
            date: "2018 - 2022"
        },
        {
            id: 2,
            level: "Vocational",
            location: "ACCESS Computer College - Computer Technician",
            date: "2015 - 2017",
        },
        {
            id: 3,
            level: "High School",
            location: "Bunsuran National High School",
            date: "2014 - 2015",
        },
        {
            id: 4,
            level: "High School",
            location: "Pres. Sergio Osmena High School",
            date: "2011 - 2014",
        },
        {
            id: 5,
            level: "Elementary",
            location: "Kapitbahayan Elementary School",
            date: "2004 - 2011",
        },
]

const awards = [
        {
            id: 1,
            text: `Deans's List`,
            from: 'STI College Balagtas'
        },
        {
            id: 2,
            text: `Python Essentials Course Completion`,
            from: 'Python Institute'
        },
        {
            id: 3,
            text: `Compute Cloud Services Participation`,
            from: 'Huawei'
        },
        {
            id: 4,
            text: `Image Management & Elastic Volume Service Participation`,
            from: 'Huawei'
           
        },
        {
            id: 5,
            text: `SAP Business One Certificate`,
            from: 'STI College Balagtas'
        },
        {
            id: 6,
            text: `Advance SAP Certificate`,
            from: 'STI College Balagtas'
        },
        {
            id: 7,
            text: `Data Encoder OJT Certificate`,
            from: 'RMES Globe Telecom'
        }        
]

export { tabs, personal, education, awards}
