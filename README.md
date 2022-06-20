# Student simple Date picker

## Project's goal

This project is a simple datepicker component published as library to npm.
Select month and year using select dropdown, default years 1950-2050, month Jan to Dc, select customizable.
Day select by mouse click.
Today date can be select by house button.

## Project's tech

React 18.2.0
node-sass 7.0.1
fontawesome dependencies 6.1.1 https://fontawesome.com/v6/docs/web/use-with/react/

## Project's Installation

Required:
Node 16.14
npm 8.3.1

## Installation

npm install datepicker-component-student

## Usage

where you want to use the component:

import DatePicker from datepicker-component-student

in the index.scss:

@import "../../node_modules/datepicker-component-student-final/src/styles/components/calendar";
@import "../../node_modules/datepicker-component-student-final/src/styles/components/calendarHeader";
@import "../../node_modules/datepicker-component-student-final/src/styles/components/datePicker";

## Retrieve date

You can easily retrieve the select date by passing a props.
i.e: setSelected is used by default with a UseEffect (both need to be uncommented for use)

## Select customization

Default mont : Jan-Dec
Default year :1950-2050

## credits

Autor: Hervé Hamann
