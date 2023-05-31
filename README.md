# MUI Additions

<!-- TOC -->
* [MUI Additions](#mui-additions)
  * [Breakpoints](#breakpoints)
  * [Accessibility Testing Utils](#accessibility-testing-utils)
    * [Simple Content Example](#simple-content-example)
    * [Container Factory Example](#container-factory-example)
    * [Helpers](#helpers)
      * [resizeScreenSize](#resizescreensize)
      * [setDarkMode](#setdarkmode)
<!-- TOC -->

## Breakpoints

Breakpoints can be added inside your `ThemeProvider` to provide a visualization of breakpoints overlayed on your app, making responsive design much easier. 

```
Note: This component should only be used in development.
```


## Accessibility Testing Utils

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