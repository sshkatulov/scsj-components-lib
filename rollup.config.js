import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import json from '@rollup/plugin-json';

const addUserClientDirective = () => {
    return {
        name: 'add-user-client-directive',
        renderChunk(code) {
            return '"use client";\n' + code;
        }
    };
}

export default {
    input: 'src/index.ts',
    output: [
        {
            file: "dist/index.cjs.js",
            format: 'cjs',
            sourcemap: true
        },
        {
            file: "dist/index.esm.js",
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        json(),
        addUserClientDirective()
    ]
}