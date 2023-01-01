export default interface User {
    student?: Student
    teacher?: Teacher
    id: number
    email: string
    name: string
    surname: string
    avatar?: string
    roleId: number
    role: Role
}

export interface Student {
    id: number
    userId: number
    classroomId: number
}

export interface Teacher {
    id: number
    userId: number
    classroomTeacher: ClassroomTeacher[]
    subjects: Subject3[]
}

export interface ClassroomTeacher {
    id: number
    teacherId: number
    classroomId: number
    classroom: Classroom
    subjects: Subject[]
}

export interface Classroom {
    id: number
    prefix: string
    grade: number
    suffix: string
    mainTeacherId: number
}

export interface Subject {
    teacherId: number
    subjectId: number
    subject: Subject2
}

export interface Subject2 {
    id: number
    name: string
    color: string
}

export interface Subject3 {
    teacherId: number
    subjectId: number
    subject: Subject4
}

export interface Subject4 {
    id: number
    name: string
    color: string
}

export interface Role {
    id: number
    name: string
    description: string
    color?: string
}
