import { mergeProps, For } from "solid-js";

export default function Footer(props) {
  const merged = mergeProps({ content: [] }, props);

  return (
    <footer class="fixed bottom-0 right-0">
      <ul class="flex items-center p-3">
        <For each={merged.content}>
          {(c) => (
            <li class="px-3 py-1 ml-4 bg-gray-400 text-gray-600 rounded-full shadow">
              {c}
            </li>
          )}
        </For>
        <li class="px-3 py-1 ml-4 bg-gray-400 text-gray-600 rounded-full shadow">
          Copyright &copy; Thorge Hemken 2021
        </li>
      </ul>
    </footer>
  );
}
