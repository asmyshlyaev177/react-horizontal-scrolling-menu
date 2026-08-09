# Live story map — react-horizontal-scrolling-menu 8.2.3

Every recipe in `menu-recipes` is maintained as a live-editable Storybook
story. Link the user at the story rather than pasting a static snippet when
they want to try the behaviour first.

Base: `https://asmyshlyaev177.github.io/react-horizontal-scrolling-menu`

| Recipe                        | Story path (append to base URL)                                          | Source                                                         |
| ----------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------- |
| Autoplay                      | `/?path=/story/examples-autoplay--autoplay`                              | `stories/Autoplay/Autoplay.source.tsx`                         |
| Infinite loop                 | `/?path=/story/examples-infiniteloop--infinite-loop`                     | `stories/InfiniteLoop/InfiniteLoop.source.tsx`                 |
| Center on click               | `/?path=/story/examples-centeronclick--center-on-click`                  | `stories/CenterOnClick/CenterOnClick.source.tsx`               |
| Save/restore position         | `/?path=/story/examples-saverestoreposition--position`                   | `stories/SaveRestorePosition/Position.source.tsx`              |
| Load more (dynamic add)       | `/?path=/story/examples-additems--add-items`                             | `stories/AddItems/AddItems.source.tsx`                         |
| One item per scroll           | `/?path=/story/examples-oneitemscroll--one-item-scroll`                  | `stories/OneItemScroll/OneItemScroll.source.tsx`               |
| Scroll to item                | `/?path=/story/examples-scrolltoitem--scroll-to-item`                    | `stories/ScrollToItem/ScrollToItem.source.tsx`                 |
| Add item + scroll to it       | `/?path=/story/examples-additemandscrolltoit--add-item-and-scroll-to-it` | `stories/AddItemAndScrollToIt/AddItemAndScrollToIt.source.tsx` |
| Arrows in Footer (below menu) | `/?path=/story/examples-bottomarrows--bottom-arrows`                     | `stories/BottomArrows/BottomArrows.source.tsx`                 |

Each story renders from its `*.source.tsx`, so the story page and the file on
disk never drift — quote the source file, not a remembered version of it.
