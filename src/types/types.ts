import { User } from "./interfaces";

export type CardProps = Pick<User, "name" | "email" | "phone" | "position" | "photo">;

export type FormValues = Omit<CardProps, "photo">;
