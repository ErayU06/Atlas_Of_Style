CREATE TABLE IF NOT EXISTS "discoveries" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" bigint NOT NULL,
	"kind" varchar(16) NOT NULL,
	"slug" varchar(64) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "disc_user_kind_slug" UNIQUE("userId","kind","slug")
);
