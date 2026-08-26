CREATE TYPE "public"."role" AS ENUM('user', 'admin');--> statement-breakpoint
CREATE TABLE "favorites" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" bigint NOT NULL,
	"countrySlug" varchar(64) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "fav_user_slug" UNIQUE("userId","countrySlug")
);
--> statement-breakpoint
CREATE TABLE "trip_notes" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" bigint NOT NULL,
	"countrySlug" varchar(64) NOT NULL,
	"note" text NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "note_user_slug" UNIQUE("userId","countrySlug")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"unionId" varchar(255) NOT NULL,
	"name" varchar(255),
	"email" varchar(320),
	"avatar" text,
	"passwordHash" varchar(255),
	"role" "role" DEFAULT 'user' NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"lastSignInAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_unionId_unique" UNIQUE("unionId")
);
