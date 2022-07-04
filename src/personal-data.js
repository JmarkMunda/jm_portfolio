import React from 'react';
import { BsPersonCheck } from 'react-icons/bs';
import { GiGraduateCap } from 'react-icons/gi';
import { BiMedal } from 'react-icons/bi';

const messages = [
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

const personal = {
    name: "Jay Mark B. Munda",
    age: "23 years old",
    gender: "Male",
    Birthday: "April 26, 1999",
    Address: "Blk 21 Lot 16 Phase 1 Balagtas Heights Brgy.Santol Balagtas, Bulacan"
}


const education = [
    {
        id: 1,
        level: "Elementary",
        school: "Kapitbahayan Elementary School",
        course: "",
        date: "2004 - 2011"
    },
    {
        id: 2,
        level: "High School",
        school: "Pres. Sergio Osmena High School",
        course: "",
        date: "2011 - 2014"
    },
    {
        id: 3,
        level: "High School",
        school: "Bunsuran National High School",
        course: "",
        date: "2014 - 2015"
    },
    {
        id: 4,
        level: "Vocational",
        school: "ACCESS Computer College",
        course: "Computer Technician",
        date: "2015 - 2017"
    },
    {
        id: 5,
        level: "College",
        school: "STI College Balagtas",
        course: "Bachelor of Science in Information Technology",
        date: "2018 - 2022"
    },
]

const awards = [
    {
        id: 1,
        title: `Deans's List`,
        from: 'STI College Balagtas'
    },
    {
        id: 2,
        title: `Python Essentials Course Completion`,
        from: 'Python Institute'
    },
    {
        id: 3,
        title: `Compute Cloud Services Participation`,
        from: 'Huawei'
    },
    {
        id: 4,
        title: `Image Management & Elastic Volume Service Participation`,
        from: 'Huawei'
    },
    {
        id: 5,
        title: `SAP Business One Certificate`,
        from: 'STI College Balagtas'
    },
    {
        id: 6,
        title: `Advance SAP Certificate`,
        from: 'STI College Balagtas'
    },
    {
        id: 7,
        title: `Data Encoder OJT Certificate`,
        from: 'RMES Globe Telecom'
    },
]

const tabs = [
    {
        id: 1,
        text: "Personal Info",
        icon: <BsPersonCheck />
    },
    {
        id: 2,
        text: "Educational Background",
        icon: <GiGraduateCap />
    },
    {
        id: 3,
        text: "Awards",
        icon: <BiMedal />
    },
]

export {messages, personal, education, awards, tabs};