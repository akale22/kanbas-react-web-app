import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    enrollments: [],
};
const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, actions) => {
            state.enrollments = actions.payload;
        },
        addEnrollment: (state, { payload: enrollment }) => {
            const newEnrollment = {
                _id: Math.floor(Math.random() * 1000 + 100),
                user: enrollment.user,
                course: enrollment.course,
            };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },
        deleteEnrollment: (state, { payload: enrollmentId }) => {
            state.enrollments = state.enrollments.filter(
                (e: any) => e._id !== enrollmentId);
        }
    },
});
export const { addEnrollment, deleteEnrollment, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;