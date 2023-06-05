# MUI Additions

## Components

----

### Breakpoints

Breakpoints can be added inside your `ThemeProvider` to provide a visualization of breakpoints overlayed on your app, making responsive design much easier. 

> **Note:** This component should only be used in development.

### Dialog

An extension of MUI's Dialog with a built-in `closeIcon` prop for ensuring consistent visual close functionality.

### Link

A mashup of MUI's Link and React Router's link components. Renders links with MUI styling, but with React Router functionality via the `to` prop.

### SkipNav

A visually hidden skip navigation link for the start of your page. Requires a focusable element to skip to, configurable via `selector` prop

### UkraineButton

I support Ukraine and its people. I sell t-shirts to raise money for humanitarian effort. I advertise those facts on my sites.

## Hooks

----

### useComponentDimensionsWithRef

Monitoring a components rendered dimensions and reacting to them is difficult, but often useful. (i.e. dynamically adjusting height to match width for square elements)

This hook returns a `ref`, `dimensions`, and the referenced `node` to facilitate tracking an element's dimensions

```typescript
import {useComponentDimensionsWithRef} from '@gtibrett/mui-additions';

export default function SquareContainer() {
    const {ref, dimensions} = useComponentDimensionsWithRef();
    
    return (
        <div ref={ref} style={{height: dimensions.width}}>
            I am in a square
        </div>
    );
}
```

### usePageTitle

Simple (quasi-)hook for dynamically setting the `<title>` tag when page content changes. 

Site name can be appended at end of title and is configurable via env var: 

```env
REACT_APP_MUI_ADDITIONS_SITE_TITLE=My Site Name
```

## Accessibility Testing Utils

----

This package provides helper functions to facilitate testing components, pages, dialogs, etc for accessibility. You can pass either content or a container factory along with multiple themes.

[axe-core](https://github.com/dequelabs/axe-core) testing engine is used.

### Simple Content Example
```typescript
import useMyTheme from './useMyTheme';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
    const {result: lightTheme} = renderHook(() => useMyTheme('light'));
    const {result: darkTheme}  = renderHook(() => useMyTheme('dark'));
    
    // Do not nest inside a test() call.
    testForAccessibility(<MyComponent/>, [lightTheme, darkTheme]);
});
```

### Container Factory Example
```typescript
import useMyTheme from './useMyTheme';
import MyComponentWithButton from './MyComponentWithButton';

describe('MyComponent', () => {
    const {result: lightTheme} = renderHook(() => useMyTheme('light'));
    const {result: darkTheme}  = renderHook(() => useMyTheme('dark'));
    
    // Generate a testable container and manipulate state, 
    // like clicking a button
    const containerFactory = async (options: RenderOptions) => {
            const {container} = render(
                <MyComponentWithButton/>,
                options
            );
            
            const buttonEl = screen.getByRole('button');
            await act(() => {
                buttonEl.click();
            });
            
            return container;
        }
    
    // Do not nest inside a test() call.
    testContainerForAccessibility(containerFactory, [lightTheme, darkTheme]);
});
```

### Helpers

#### resizeScreenSize

Simple util for setting explicit screen width

#### setDarkMode

Simple util for setting color scheme to `light` or `dark`