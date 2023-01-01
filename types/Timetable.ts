export default interface Timetable {
    id: number
    classroomId: number
    week: number
    year: number
    schedules: Schedule[]
    daySchedules: DaySchedule[][]
}

export interface Schedule {
    id: number
    subjectId: number
    timetableId: number
    timeFrom: number
    timeTo: number
    day: number
    subject: Subject
    teachers: Teacher[]
}

export interface Subject {
    id: number
    name: string
    color: string
}

export interface Teacher {
    teacherId: number
    scheduleId: number
    teacher: Teacher2
}

export interface Teacher2 {
    id: number
    teacherId: number
    classroomId: number
    teacher: Teacher3
}

export interface Teacher3 {
    id: number
    userId: number
    user: User
}

export interface User {
    id: number
    email: string
    name: string
    surname: string
    roleId: number
    role: Role
    student: any
    teacher: Teacher4
}

export interface Role {
    id: number
    name: string
    description: string
}

export interface Teacher4 {
    id: number
    userId: number
    classroomTeacher: ClassroomTeacher[]
    subjects: Subject4[]
}

export interface ClassroomTeacher {
    id: number
    teacherId: number
    classroomId: number
    classroom: Classroom
    subjects: Subject2[]
}

export interface Classroom {
    id: number
    prefix: string
    grade: number
    suffix: string
    mainTeacherId: number
}

export interface Subject2 {
    teacherId: number
    subjectId: number
    subject: Subject3
}

export interface Subject3 {
    id: number
    name: string
    color: string
}

export interface Subject4 {
    teacherId: number
    subjectId: number
    subject: Subject5
}

export interface Subject5 {
    id: number
    name: string
    color: string
}

export interface DaySchedule {
    id: number
    subjectId: number
    timetableId: number
    timeFrom: number
    timeTo: number
    day: number
    subject: Subject6
    teachers: Teacher5[]
}

export interface Subject6 {
    id: number
    name: string
    color: string
}

export interface Teacher5 {
    teacherId: number
    scheduleId: number
    teacher: Teacher6
}

export interface Teacher6 {
    id: number
    teacherId: number
    classroomId: number
    teacher: Teacher7
}

export interface Teacher7 {
    id: number
    userId: number
    user: User2
}

export interface User2 {
    id: number
    email: string
    name: string
    surname: string
    roleId: number
    role: Role2
    student: any
    teacher: Teacher8
}

export interface Role2 {
    id: number
    name: string
    description: string
}

export interface Teacher8 {
    id: number
    userId: number
    classroomTeacher: ClassroomTeacher2[]
    subjects: Subject9[]
}

export interface ClassroomTeacher2 {
    id: number
    teacherId: number
    classroomId: number
    classroom: Classroom2
    subjects: Subject7[]
}

export interface Classroom2 {
    id: number
    prefix: string
    grade: number
    suffix: string
    mainTeacherId: number
}

export interface Subject7 {
    teacherId: number
    subjectId: number
    subject: Subject8
}

export interface Subject8 {
    id: number
    name: string
    color: string
}

export interface Subject9 {
    teacherId: number
    subjectId: number
    subject: Subject10
}

export interface Subject10 {
    id: number
    name: string
    color: string
}
