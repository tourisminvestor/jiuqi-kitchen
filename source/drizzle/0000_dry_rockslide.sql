CREATE TABLE `favorites` (
	`owner` text NOT NULL,
	`item` text NOT NULL,
	PRIMARY KEY(`owner`, `item`)
);
--> statement-breakpoint
CREATE TABLE `posts` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`author` text NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`image_key` text NOT NULL,
	`created_at` integer NOT NULL
);
