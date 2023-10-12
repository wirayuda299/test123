"use client";

import { useState } from "react";

import { AiOutlineCheck, AiOutlineComment } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { GoMention } from "react-icons/go";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { notifications } from "@/constants/notifications";
import Notification from "./Notification";

const Notifications = () => {
  const [isSeen, setIsSeen] = useState(false);

  const reactions = notifications.filter(
    (notification) => notification.type === "reaction"
  );
  const comments = notifications.filter(
    (notification) => notification.type === "comment"
  );
  const mentions = notifications.filter(
    (notification) => notification.type === "mention"
  );

  return (
    <>
      <header className='notificationsDropDownContainer'>
        {/* Dynamic Header */}
        <h3 className='heading3 px-[6px] text-darkSecondary-900 dark:text-white-800'>
          {notifications.length} Notifications
        </h3>

        {/* Mark All Read Button */}
        <button
          type='button'
          className='markAsSeenButton'
          onClick={() => setIsSeen((prevState) => !prevState)}
        >
          <span className='display-semibold mr-[10px] text-secondary-blue-80'>
            <AiOutlineCheck size={20} />
          </span>
          {isSeen ? "Mark All Unread" : "Mark All Read"}
        </button>
      </header>

      {/* Tabs */}
      <Tabs defaultValue='allNotifications' className='w-full'>
        {/* List of All Tabs */}
        <TabsList className='tabList'>
          {/* All Notifications Tab */}
          <TabsTrigger value='allNotifications' className='tabContainer'>
            All notifications
          </TabsTrigger>

          {/* Reactions Tab */}
          <TabsTrigger value='reactions' className='tabContainer'>
            <FaRegHeart size={20} className='mr-2' />
            Reactions
          </TabsTrigger>

          {/* Comments Tab */}
          <TabsTrigger value='comments' className='tabContainer'>
            <AiOutlineComment size={20} className='mr-2' />
            Comments
          </TabsTrigger>

          {/* Mentions Tab */}
          <TabsTrigger value='mentions' className='tabContainer'>
            <GoMention size={20} className='mr-2' />
            Mentions
          </TabsTrigger>

          {/* Create Post Tab */}
          <TabsTrigger value='createPost' className='tabContainer'>
            <BsPencilSquare size={18} />
          </TabsTrigger>
        </TabsList>

        {/* Content for each tab */}
        {/* All Notifications */}
        <TabsContent value='allNotifications'>
          {notifications.length === 0 ? (
            <p className='emptyNotificationsText'>Nothing to show!</p>
          ) : (
            notifications.map((notification) => (
              <NavigationMenuLink key={notification.id}>
                <Notification
                  name={notification.name}
                  avatar={notification.avatar}
                  typeIcon={notification.typeIcon}
                  typeText={notification.typeText}
                  text={notification.text}
                  title={notification.title}
                  date={notification.date}
                  time={notification.time}
                  isSeen={isSeen}
                />
              </NavigationMenuLink>
            ))
          )}
        </TabsContent>

        {/* Reactions Tab */}
        <TabsContent value='reactions'>
          {reactions.length === 0 ? (
            <p className='emptyNotificationsText'>Nothing to show!</p>
          ) : (
            reactions.map((notification) => (
              <NavigationMenuLink key={notification.id}>
                <Notification
                  name={notification.name}
                  avatar={notification.avatar}
                  typeIcon={notification.typeIcon}
                  typeText={notification.typeText}
                  text={notification.text}
                  title={notification.title}
                  date={notification.date}
                  time={notification.time}
                  isSeen={isSeen}
                />
              </NavigationMenuLink>
            ))
          )}
        </TabsContent>

        {/* Comments Tab */}
        <TabsContent value='comments'>
          {comments.length === 0 ? (
            <p className='emptyNotificationsText'>Nothing to show!</p>
          ) : (
            comments.map((notification) => (
              <NavigationMenuLink key={notification.id}>
                <Notification
                  name={notification.name}
                  avatar={notification.avatar}
                  typeIcon={notification.typeIcon}
                  typeText={notification.typeText}
                  text={notification.text}
                  title={notification.title}
                  date={notification.date}
                  time={notification.time}
                  isSeen={isSeen}
                />
              </NavigationMenuLink>
            ))
          )}
        </TabsContent>

        {/* Mentions Tab */}
        <TabsContent value='mentions'>
          {mentions.length === 0 ? (
            <p className='emptyNotificationsText'>Nothing to show!</p>
          ) : (
            mentions.map((notification) => (
              <NavigationMenuLink key={notification.id}>
                <Notification
                  name={notification.name}
                  avatar={notification.avatar}
                  typeIcon={notification.typeIcon}
                  typeText={notification.typeText}
                  text={notification.text}
                  title={notification.title}
                  date={notification.date}
                  time={notification.time}
                  isSeen={isSeen}
                />
              </NavigationMenuLink>
            ))
          )}
        </TabsContent>

        {/* Create Post Tab */}
        <TabsContent value='createPost'>
          <p className='emptyNotificationsText'>Create a Post...</p>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Notifications;
