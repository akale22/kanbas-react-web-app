import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments: assignments,
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: "A" + Math.floor(Math.random() * 100) + 100,
                title: assignment.name,
                course: assignment.course,
                points: assignment.points,
                availableFrom: assignment.availableFrom,
                availableUntil: assignment.availableUntil,
                dueDate: assignment.dueDate,
                description: assignment.description,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (m: any) => m._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((m: any) =>
                m._id === assignment._id ? assignment : m
            ) as any;
        },
    },
});
export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;